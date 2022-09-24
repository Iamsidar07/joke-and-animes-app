import React from "react";
import Link from "next/link";
import Image from "next/image";
const Intro = ({ pic, title, paragraph, isLeft, url, category, isBtn }) => {

  return (
    <div
      className={`  box-shadow  md:shadow-none h-fit  ${isLeft?":md:flex-row":"md:flex-row-reverse"} mx-auto group  flex items-center  justify-between w-full  md:p-12 flex-col-reverse md:flex-row mb-7 mt-7 md:m-0`} >
     
      <div className="bg-white p-5 w-full md:w-[45%]  flex flex-col items-center justify-start   space-y-2 ">
        <div className=" space-y-4 ">
          <h1 className="text-3xl  md:text-5xl text-gray-700   transition-colors duration-100 ease-in">
            {title}
          </h1>
          <p className="lowercase text-2xl text-gray-400 md:text-3xl">{paragraph}</p>
          <div>
          {isBtn && (
            <button className=" w-full md:w-fit  flex  justify-center   transition-transform duration-75 ease-in  md:hover:bg-black md:hover:text-white rounded-full md:bg-white md:text-black text-white bg-black  border-[1px] border-black px-2  md:px-8 py-2 md:py-3  md:inline-flex items-center">
              <Link href={url}>
                <a className="flex items-center ">
                  Get {category} 
                </a>
              </Link>
            </button>
          )}
          </div>
        </div>
      </div>
      <div className="md:w-1/2 h-full  rounded shadow-[rgba(0, 0, 0, 0.08) 0px 4px 12px;] overflow-auto w-full  md:block   z-[1]" >
        <Image
          src={pic.url}
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="cover"
          objectPosition={"center top"}
          alt="Feature image"
          className=" md:hover:scale-125  transition-all duration-200 overflow-auto p-2 box-shadow"
        />
       
      </div>
    </div>
  );
};

export default Intro;
