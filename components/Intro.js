import React from "react";
import Link from "next/link";
import Image from "next/image";
const Intro = ({ pic, title, paragraph, isLeft, url, category, isBtn }) => {

  return (
    <div
      className={` md:hover:shadow-lg box-shadow md:box-shadow max-w-md  md:max-w-xl mx-auto p-2  group  flex items-center   justify-content rounded-xl  flex-col  `} >
      <div className=" rounded shadow-[rgba(0, 0, 0, 0.08) 0px 4px 12px;] overflow-auto w-full  md:block   z-[1]" >
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
      <div className=" py-3  flex flex-col items-center justify-start   space-y-2 ">
        <div className=" space-y-4 ">
          <h1 className="text-xl  md:text-3xl text-gray-400   transition-colors duration-100 ease-in">
            {title}
          </h1>
          <p className="lowercase text-base md:text-lg">{paragraph}</p>
          <div>
          {isBtn && (
            <button className=" w-full md:w-fit  flex  justify-center   transition-transform duration-75 ease-in  md:hover:bg-black md:hover:text-white rounded-full md:bg-white md:text-black text-white bg-black  border-[1px] border-black  px-10 py-4  md:inline-flex items-center">
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
    </div>
  );
};

export default Intro;
