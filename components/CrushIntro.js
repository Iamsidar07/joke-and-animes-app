import React from "react";
import CrushTalk from "./CrushTalk";
import Image from "next/image";

const CrushIntro = ({ loading, pic, setLoading, isLeft }) => {
  return (
    <div
      id="crush-bg"
      className="md:h-[78vh] h-[50vh] w-full flex-col md:flex-row flex items-center justify-center md:justify-between px-2 "
      style={{
        background: "url('1.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >  <div className="md:flex ">
      <CrushTalk />
    </div>
      <div className="hidden md:inline-block  p-2 rounded-full shadow-2xl w-96 max-w-sm bg-white" >
      <Image
        src="/profile.png"
        layout="responsive"
        objectFit="contain"
        alt="Manoj"
        width={1020}
        height={1020}
        className="rounded-[50%]"
      />
      </div>
    </div>
  );
};

export default CrushIntro;
