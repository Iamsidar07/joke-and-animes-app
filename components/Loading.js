import Image from "next/image";
import React from "react";
import { LoadingAnimation } from "./LoadingAnimation";


const Loading = () => {
  return (
    <div className="fixed  inset-0 z-[10] flex flex-col items-center justify-center gap-5  overflow-hidden bg-white/70">
       {/* <div className="w-44 h-44 relative">
       <Image
        src={"/anime.jpg"}
        layout="fill"
        alt="logo"
        className="rounded-xl"
       />
       </div> */}
      <LoadingAnimation style="mr-2 h-12 w-12 animate-spin fill-white text-gray-600"/>
      <p className=" ">Loading...</p>
    </div>
  );
};

export default Loading;