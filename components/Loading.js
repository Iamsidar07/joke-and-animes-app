import React from "react";
import { LoadingAnimation } from "./LoadingAnimation";


const Loading = () => {
  return (
    <div className="fixed  inset-0 z-[100] flex flex-col items-center justify-center gap-5 h-screen overflow-hidden bg-gray-800">
      <h1 className="text-9xl animate-bounce bg-white rounded-xl p-4 shadow-2xl">👨‍💻</h1>
      <LoadingAnimation style="mr-2 h-10 w-10 animate-spin fill-white text-gray-600"/>
      <p className="font-semibold text-green-400 text-base md:text-xl">Ruk ja Sabra kr le thoda ... 🚀</p>
    </div>
  );
};

export default Loading;
