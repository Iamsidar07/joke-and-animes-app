import Image from "next/image";
import React from "react";
import { LoadingAnimation } from "./LoadingAnimation";


const Loading = () => {
  return (
    <div className="fixed  inset-0 z-[10] flex flex-col items-center justify-center gap-5  overflow-hidden bg-white/70 ">
       {/* <div className="w-44 h-44 relative">
       </div> */}
      <Image
        src={"/loader.gif"}
        objectFit="contain"
        alt="logo"
        className="rounded-xl"
        width={300}
        height={300}
      />
      <p className=" ">Loading...</p>
    </div>
  );
};

export default Loading;