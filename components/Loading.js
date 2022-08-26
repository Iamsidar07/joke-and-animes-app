import React from "react";
import { LoadingAnimation } from "./LoadingAnimation";


const Loading = () => {
  return (
    <div className="fixed  inset-0 z-50 flex flex-col items-center justify-center gap-5 h-screen overflow-hidden bg-black/80">
      <LoadingAnimation style="mr-2 h-20 w-20 animate-bounce fill-white text-gray-600"/>
      <p className="font-semibold text-gray-400 text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
