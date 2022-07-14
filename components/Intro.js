import React from "react";
import Image from "next/image";
import Link from "next/link";
const Intro = ({
  pic,
  title,
  paragraph,
  isLeft,
  url,
  category,
  isBtn,
}) => {
  return (
    <div
      className={
        isLeft
          ? " max-w-sm  md:max-w-6xl mx-auto md:px-10 bg-[#1e293b] flex-col-reverse overflow-auto  md:flex-row-reverse md:min-h-screen my-1 group  flex items-center   justify-between rounded-xl"
          : " max-w-sm  md:max-w-6xl mx-auto md:px-10 bg-[#1e293b] flex-col-reverse my-10 overflow-auto  group md:min-h-screen  md:flex-row flex items-center  justify-between rounded-xl"
      }
    >
      <div className=" text-white  flex flex-col items-center justify-start  md:w-[55%]   group  space-y-2 p-5">
        <div className=" space-y-3 ">
          <h1 className="text-3xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-green-600  md:text-6xl font-bold  transition-colors duration-100 ease-in">
            {title}
          </h1>
          <p className="lowercase text-base md:text-xl">
            {paragraph}
          </p>
          {isBtn && (
            <button className="mt-6 w-full md:w-auto flex  justify-center  rounded  bg-[#334155]  md:hover:scale-105 transition-all duration-100 ease-in  hover:bg-[#334155eb] text-white  py-3 px-6  md:inline-flex items-center">
              <Link href={url}>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-6  inline-block "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  get {category}
                </a>
              </Link>
            </button>
          )}
        </div>
      </div>
      <div className=" p-2 overflow-auto w-full h-64  relative max-w-[384px] md:w-96 md:h-96 md:block   z-[1]">
        <Image
          src={pic.url}
          layout="fill"
          alt="Anime"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={pic.url}
          className=" group-hover:scale-150 rounded-md transition-all duration-200 overflow-auto p-5 bg-black "
        />
      </div>
    </div>
  );
};

export default Intro;
