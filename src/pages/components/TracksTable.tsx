import {formatMSS} from "@/utils/formatDuration";
import {Track} from "@/types/types";
import {IconClock, IconSend} from "@tabler/icons-react";

interface IProps {
  tracks: Track[];
}

interface ShareButtonProps {
  trackUrl: string;
  trackTitle: string;
}

export default function TracksTable({
  tracks,
}: IProps) {

  const playTrack = (track: Track) => {
    if (track.preview_url) {
    }
  };

  const handleShare = async ({ trackUrl, trackTitle }: ShareButtonProps) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out this song: ${trackTitle}`,
          text: `I found this amazing song on Spotify! 🎵`,
          url: trackUrl,
        });
        console.log("Track shared successfully!");
      } catch (error) {
        console.error("Error sharing track:", error);
      }
    } else {
      alert("Web Share API is not supported in this browser.");
    }
  };

  return (
    <div
      className="grid grid-cols-12 gap-4 p-4 mt-8 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-lg shadow-lg text-white relative">
      <div className="col-span-1 font-semibold tracking-wider text-center uppercase text-gray-100">
        #
      </div>
      <div className="col-span-9 text-sm font-medium tracking-wider text-left uppercase text-gray-200">
        Title
      </div>
      <div className="col-span-1 text-sm font-medium tracking-wider text-center uppercase text-gray-200">
        <IconClock/>
      </div>
      <div className="col-span-1 text-sm font-medium tracking-wider text-center uppercase text-gray-200">
      </div>
      <div className="col-span-12 my-3 border-b border-gray-300"></div>

      <div className="w-full col-span-12">
        {tracks?.map((track, index) => (
          <div
            className={`grid grid-cols-12 items-center py-3 px-4 hover:bg-indigo-600/40 rounded-lg transition ${
              !track.preview_url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            key={track.id + index}
          >
            {/* Track Number */}
            <div className="col-span-1 text-center font-bold text-gray-100">
              {index + 1}
            </div>

            {/* Track Title and Artists */}
            <div className="col-span-9">
              <h2
                className={`font-medium text-lg ${
                  track.preview_url
                    ? "cursor-pointer hover:underline"
                    : "text-gray-300"
                }`}
                onClick={() => track.preview_url && playTrack(track)}
              >
                {track.name}
              </h2>
                <div className="text-sm text-gray-200">
                  {track.artists.map((artist, i) => (
                    <span key={i}>
                  <span
                    className="hover:underline hover:text-white"
                  >
                    {artist.name}
                  </span>
                      {i < track.artists.length - 1 && ", "}
                </span>
                  ))}
                </div>
            </div>

            {/* Track Duration */}
            <div className="col-span-1 text-center text-gray-200">
              {formatMSS(track.duration_ms)}
            </div>

            {/* Share Icon */}
            <div className="col-span-1 text-right text-gray-200">
              <IconSend
                className="hover:text-white hover:scale-110 transition-transform"
                onClick={() =>
                  handleShare({
                    trackUrl: track.preview_url,
                    trackTitle: track.name,
                  })
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
