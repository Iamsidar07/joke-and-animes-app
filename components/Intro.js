import React from "react";
import Image from "next/image";
import Link from "next/link";
const Intro = ({ pic, title, paragraph, isLeft, url, category, isBtn }) => {
  return (
    <div
      className={
        isLeft
          ? " max-w-sm  md:max-w-6xl mx-auto md:px-10  flex-col-reverse overflow-auto  md:flex-row-reverse md:min-h-[460px]  my-12 group  flex items-center   justify-between rounded md:rounded-xl"
          : " max-w-sm  md:max-w-6xl mx-auto md:px-10  flex-col-reverse my-12 overflow-auto  md:min-h-[460px]  md:flex-row flex items-center  justify-between rounded md:rounded-xl"
      }
    >
      <div className=" text-white  flex flex-col items-center justify-start  md:w-[55%]     space-y-2 py-5">
        <div className=" space-y-3 ">
          <h1 className="text-3xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 md:text-6xl font-extrabold  transition-colors duration-100 ease-in">
            {title}
          </h1>
          <p className="lowercase text-base md:text-xl">{paragraph}</p>
          {isBtn && (
            <button className="mt-6 w-full md:w-auto flex  justify-center  rounded-full font-bold bg-orange-600   transition-all duration-100 ease-in  md:hover:bg-orange-500 text-white  py-3 px-6  md:inline-flex items-center">
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
      <div className="shadow-md shadow-gray-800 py-2 overflow-auto w-full h-72  relative max-w-[384px] md:w-96 md:h-96 md:block   z-[1]">
        <Image
          src={pic.url}
          layout="fill"
          alt="Anime"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={pic.url}
          priority
          className=" md:hover:scale-150 rounded transition-all duration-200 overflow-auto py-5 bg-black "
        />
      </div>
    </div>
  );
};

export default Intro;
