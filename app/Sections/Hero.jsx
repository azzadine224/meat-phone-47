import Image from "next/image";
import React from "react";
import HeroImage from "../../public/pngwing.com.png";
import Link from "next/link";

function hero() {
  return (
    <div className="bg-blue-500 md:max-h-[650px] pt-16 px-4 lg:px-8 flex flex-col lg:flex-row z-0">
      <div className="flex flex-col items-center lg:items-start lg:justify-center text-center lg:text-start w-full h-auto">
        <h1 className="font-sans font-bold text-5xl lg:text-6xl pt-16 text-white">
          Listen to the <span className="text-yellow-500">amazing</span> music
          sound.
        </h1>
        <p className="font-sans font-medium text-xl pt-2 text-white">
          Experience music like never before
        </p>
      </div>
      <Image
        src={HeroImage}
        width={0}
        height={0}
        alt="HeroImage"
        className="w-1/2 mx-auto h-auto"
      />
    </div>
  );
}

export default hero;
