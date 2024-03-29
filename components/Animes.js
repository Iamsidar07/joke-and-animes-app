import React, { useState } from "react";

import { Fade } from "react-reveal";
import CustomImage from "./CustomImage";
const Animes = ({ animes,setKeywords }) => {
  const [isSelected,setIsSelected]=useState(-1);
  return (
    <div className=" w-full mx-auto gap-2   grid grid-cols-1 sm:gap-2 md:grid-cols-3 sm:grid-cols-2  md:gap-3 2xl:grid-cols-4  ">
      {animes.images?.map(({ url, width, height, image_id, tags }) => {
        return (
          <Fade bottom key={image_id}>
            <div className="bg-white rounded-t-xl md:group-hover:rounded-t-xl shadow-[rgba(0, 0, 0, 0.08) 0px 4px 12px;] w-full   group   rounded overflow-hidden  box-shadow">
              <CustomImage
                url={url}
                layout="responsive"
                width={1280}
                height={1020}
                objectFit="contain"
                objectPosition={"top center"}
                customClassName={
                  typeof url == undefined
                    ? "hidden"
                    : " rounded-t-lg md:group-hover:rounded-t-xl  max-w-full h-fit md:h-auto md:group-hover:scale-125 transition-all ease-in duration-200"
                }
              />
              <div className=" cursor-pointer px-2 py-1">
                <p className=" ">{tags[1]?.description}</p>
              </div>
              <div className=" cursor-pointer px-2 ">
                
                {tags.map(({ tag_id, name }) => {
                  return (
                    <span
                      key={tag_id}
                      className={`${isSelected === tag_id && "bg-[#0082FF] text-white"} inline-block border-2 border-[#0082FF] rounded-full px-3 py-1 text-sm mr-1 mb-1`}
                      onClick={()=>{
                        setKeywords(name);
                        setIsSelected(tag_id);
                      }}
                    >
                      <p>@{name}</p>
                    </span>
                  );
                })}
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
};

export default Animes;
