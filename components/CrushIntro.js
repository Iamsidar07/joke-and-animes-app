import React from "react";
import CrushTalk from "./CrushTalk";
import Image from "next/image";

const CrushIntro = ({ loading, pic, setLoading, isLeft }) => {
  return (
    <div
      id="crush-bg"
      className="h-[78vh] w-full flex-col md:flex-row flex items-center justify-around "
      style={{
        background: "url('1.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >  <div className="hidden md:flex">
      <CrushTalk />
    </div>
      <div className="py-2 rounded-md shadow-2xl w-96 max-w-sm bg-white" >
      <Image
        src="/profile.png"
        layout="responsive"
        objectFit="contain"
        alt="Manoj"
        width={1080}
        height={1020}
        className="rounded"
      />
      </div>
    </div>
  );
};

export default CrushIntro;
