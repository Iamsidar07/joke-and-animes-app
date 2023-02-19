import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade, Slide } from "@mui/material";
const Intro = ({ pic, title, paragraph, isLeft, url, category, isBtn }) => {
  return (
    <div
      className={`  box-shadow  md:shadow-none h-fit  ${
        isLeft ? ":md:flex-row" : "md:flex-row-reverse"
      } mx-auto group  flex items-center  justify-between w-full px-2  flex-col-reverse md:flex-row my-7  md:min-h-[80vh]`}
    >
      <div className="bg-white   p-2  md:p-5 w-full md:w-[45%]  flex flex-col items-center justify-start   space-y-2 ">
        <div className=" space-y-4 ">
          <h1 className="text-lg font-bold  md:text-3xl text-gray-700   transition-colors duration-100 ease-in">
            {title}
          </h1>
          <p className="lowercase  text-gray-400 md:text-lg">
            {paragraph}
          </p>
          <div>
            {isBtn && (
              <Link href={url}>
                <a className=" w-full px-8  py-3  md:w-fit  flex  justify-center   transition-transform duration-75 ease-in   rounded-lg md:hover:bg-[#0084ffdb]  text-white bg-[#0082FF]  md:px-9 md:inline-flex items-center ">
                  Get {category}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="md:w-1/2 h-full rounded-lg overflow-auto w-full  md:block   z-[1]">
        <Image
          src={pic.url}
          width={1920}
          height={1180}
          layout="responsive"
          objectFit="cover"
          objectPosition={"center top"}
          alt="Feature image"
          className=" md:hover:scale-125 rounded-lg  transition-all duration-200 overflow-auto p-2"
        />
      </div>
    </div>
  );
};

export default Intro;
