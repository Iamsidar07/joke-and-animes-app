import React from "react";
import Link from "next/link";
import CustomImage from "./CustomImage";
import Image from "next/image";
const Intro = ({ pic, title, paragraph, isLeft, url, category, isBtn }) => {
  console.log(pic)
  return (
    <div
      className={` md:hover:box-shadow max-w-sm md:h-screen   box-shadow md:max-w-7xl mx-auto md:px-10  flex-col-reverse   mb-12 group  flex items-center   justify-content rounded-xl p-3 md:rounded-3xl  ${isLeft?"md:flex-row-reverse ":"md:flex-row "} `} >
      <div className=" px-3  flex flex-col items-center justify-start   space-y-2 py-5">
        <div className=" space-y-3 md:space-y-6 ">
          <h1 className="text-3xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 md:text-6xl font-bold  transition-colors duration-100 ease-in">
            {title}
          </h1>
          <div>
          <p className="lowercase text-2xl md:text-3xl">{paragraph}</p>
          {isBtn && (
            <button className="mt-6 w-full md:w-auto flex  justify-center  rounded-full  bg-gradient-to-tr from-[#D4145A] to-[#FBB03B] transition-transform duration-75 ease-in  md:hover:bg-orange-500 md:hover:scale-110 text-white  py-3 px-5  md:inline-flex items-center">
              <Link href={url}>
                <a className="flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-6 mr-1 inline-block "
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
                  Get {category}
                </a>
              </Link>
            </button>
          )}
          </div>
        </div>
      </div>
      <div className=" shadow-md   rounded-xl shadow-[rgba(0, 0, 0, 0.08) 0px 4px 12px;] overflow-auto w-full  md:block bg-white  z-[1]" >
        <Image
          src={pic.url}
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
          objectPosition={"top"}
          alt="Feature image"
          className=" md:hover:scale-125  transition-all duration-200 overflow-auto p-2 box-shadow"
        />
       
      </div>
    </div>
  );
};

export default Intro;
