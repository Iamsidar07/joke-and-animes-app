import React from "react";
import Link from "next/link";
import Image from "next/image";
const Intro = ({ pic, title, paragraph, isLeft, url, category, isBtn }) => {

  return (
    <div
      className={` md:hover:shadow-lg box-shadow md:shadow-none max-w-md  md:max-w-xl mx-auto md:px-10    mb-12 group  flex items-center   justify-content rounded-xl p-3 md:rounded-3xl flex-col  `} >
      <div className=" shadow-md   rounded-xl shadow-[rgba(0, 0, 0, 0.08) 0px 4px 12px;] overflow-auto w-full  md:block   z-[1]" >
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
      <div className=" px-3  flex flex-col items-center justify-start   space-y-2 py-5">
        <div className=" space-y-3 md:space-y-6 ">
          <h1 className="text-3xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 md:text-5xl font-bold  transition-colors duration-100 ease-in">
            {title}
          </h1>
          <div>
          <p className="lowercase text-2xl md:text-3xl">{paragraph}</p>
          {isBtn && (
            <button className="mt-6 w-full md:w-auto  flex  justify-center  rounded-full  bg-gradient-to-tr from-[#D4145A] to-[#FBB03B] transition-transform duration-75 ease-in  md:hover:bg-orange-500 md:hover:scale-110 text-white  py-4 px-8  md:inline-flex items-center">
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
