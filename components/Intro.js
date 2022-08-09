import React from "react";
import Link from "next/link";
import CustomImage from "./CustomImage";
const Intro = ({ pic, title, paragraph, isLeft, url, category, isBtn,bg }) => {
  
  return (
    <div
      className={
        isLeft
          ? "md:hover:box-shadow max-w-sm  box-shadow md:max-w-7xl mx-auto md:px-10  flex-col-reverse overflow-auto  md:flex-row-reverse   mb-12 group  flex items-center   justify-between rounded-xl p-3 md:rounded-3xl z-[-10]"
          : "md:hover:box-shadow max-w-sm  box-shadow md:max-w-7xl mx-auto md:px-10  flex-col-reverse mb-12 overflow-auto    md:flex-row flex items-center  justify-between rounded-xl md:rounded-3xl p-3 z-[-10]"
      }
    style={{background:`${bg}`}}>
      <div className="    flex flex-col items-center justify-start  md:w-[60%]     space-y-2 py-5">
        <div className=" space-y-3 ">
          <h1 className="text-2xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 md:text-4xl font-bold  transition-colors duration-100 ease-in">
            {title}
          </h1>
          <p className="lowercase ">{paragraph}</p>
          {isBtn && (
            <button className="mt-6 w-full md:w-auto flex  justify-center  rounded-full  bg-orange-600   transition-all duration-100 ease-in  md:hover:bg-orange-500 text-white  py-4 px-8  md:inline-flex items-center">
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
                  Get {category}
                </a>
              </Link>
            </button>
          )}
        </div>
      </div>
      <div className="shadow-md max-w-sm rounded-lg md:rounded-2xl shadow-[rgba(0, 0, 0, 0.08) 0px 4px 12px;] overflow-auto w-full  md:block bg-white  z-[1]" >
        
        <CustomImage
         url={pic.url}
          width={1080}
          height={1220}
          layout="responsive"
          objectFit="cover"
          customClassName={"rounded-lg md:rounded-2xl md:hover:scale-125  transition-all duration-200 overflow-auto p-2 box-shadow"}
        />
      </div>
    </div>
  );
};

export default Intro;
