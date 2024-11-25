import React from 'react';
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-blur opacity-80"></div>
      <div className="relative z-10">
        <Image
          src="https://www.coldplay.com/wp/wp-content/uploads/2024/06/CP_HEART.gif"
          alt="Loading"
          className="w-40 h-40"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default Loading;
