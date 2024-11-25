import { usePlayer } from "@/context/PlayerContext";
import Link from "next/link";
import React from "react";

import {IoRepeat, IoShuffle} from "react-icons/io5";
import {MdOutlineMicExternalOn, MdPause, MdPlayArrow, MdQueueMusic, MdSkipNext, MdSkipPrevious} from "react-icons/md";
import {formatMSS} from "@/utils/formatDuration";
import {RiVolumeUpLine} from "react-icons/ri";

export default function PreviewPlayer() {
  const {
    currentTrack,
    isPlaying,
    setSlider,
    setDrag,
    togglePlay,
    duration,
    currentTime,
    slider,
  } = usePlayer();

  if (!currentTrack) {
    return null;
  }

  return (
    <div
      className={`sticky bottom-0 grid grid-cols-12 gap-12 items-center justify-between px-5 border-t border-gray-700 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-blur-md rounded-t-3xl shadow-lg z-50 ${
        currentTrack ? "py-4" : "py-0"
      }`}
    >
      <div className="flex items-center col-span-3 gap-4">
        <div className="text-white">
          <h4 className="text-base font-semibold truncate">{currentTrack?.name}</h4>
          <Link href={`/artist/${currentTrack?.artists[0].id}`}>
            <h5 className="text-sm text-blue-200 hover:underline">
              {currentTrack?.artists[0].name}
            </h5>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center col-span-7 gap-3">
        <div className="flex items-center gap-6">
          <IoShuffle className="text-lg text-white hover:scale-110 transition-transform duration-200"/>
          <MdSkipPrevious className="text-xl text-white hover:scale-110 transition-transform duration-200"/>
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-10 h-10 text-2xl text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600"
          >
            {isPlaying ? <MdPause/> : <MdPlayArrow/>}
          </button>
          <MdSkipNext className="text-xl text-white hover:scale-110 transition-transform duration-200"/>
          <IoRepeat className="text-lg text-white hover:scale-110 transition-transform duration-200"/>
        </div>

        <div className="flex items-center w-full gap-5">
      <span className="text-xs text-white">
        {currentTime ? formatMSS(currentTime * 1000) : "0:00"}
      </span>
          <input
            type="range"
            className="w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
            value={slider}
            onChange={(e) => {
              setSlider(parseInt(e.target.value));
              setDrag(parseInt(e.target.value));
            }}
          />
          <span className="text-xs text-white">
        {duration ? formatMSS(duration * 1000) : "0:00"}
      </span>
        </div>
      </div>

      <div className="flex items-center col-span-2 gap-3">
        <MdOutlineMicExternalOn className="text-lg text-white hover:scale-110 transition-transform duration-200"/>
        <MdQueueMusic className="text-lg text-white hover:scale-110 transition-transform duration-200"/>
        <RiVolumeUpLine className="text-lg text-white hover:scale-110 transition-transform duration-200"/>
        <div className="w-20">
          <div className="relative w-full">
            <div className="flex h-1 overflow-hidden bg-gray-500 rounded">
              <div className="w-1/3 bg-blue-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
