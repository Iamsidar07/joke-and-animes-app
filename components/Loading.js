import React from "react";
import { LoadingAnimation } from "./LoadingAnimation";


const Loading = () => {
  return (
    <div className="fixed  inset-0 z-[100] flex flex-col items-center justify-center gap-5 h-screen overflow-hidden bg-black">
      <LoadingAnimation style="mr-2 h-20 w-20 animate-spin fill-white text-gray-600"/>
      <p className="font-semibold text-green-400 text-base md:text-xl">Ruk ja Sabra kr le thoda ... 🚀</p>
    </div>
  );
};

export default Loading;
