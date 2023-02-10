import React from "react";

import { Fade } from "react-reveal";
import CustomImage from "./CustomImage";
const Animes = ({ animes,setKeywords }) => {
  return (
    <div className=" w-full mx-auto gap-2 max-w-full  grid grid-cols-1 sm:gap-2 md:grid-cols-3 sm:grid-cols-2  md:gap-3 2xl:grid-cols-4  ">
      {animes.images?.map(({ url, width, height, image_id, tags }) => {
        return (
          <Fade bottom key={image_id}>
            <div className="bg-white rounded-t-xl md:group-hover:rounded-t-xl shadow-[rgba(0, 0, 0, 0.08) 0px 4px 12px;] w-full   group   rounded overflow-hidden  box-shadow">
              <CustomImage
                url={url}
                layout="responsive"
                width={width}
                height={height/2}
                objectFit="contain"
                objectPosition={"top"}
                customClassName={
                  typeof url == undefined
                    ? "hidden"
                    : " rounded-t-xl md:group-hover:rounded-t-xl  max-w-full h-fit md:h-auto md:cursor-pointer md:group-hover:scale-125 transition-all ease-in duration-200"
                }
              />
              <div className=" cursor-pointer px-2 py-3 ">
                <p className=" ">{tags[1]?.description}</p>
              </div>
              <div className=" cursor-pointer p-2 ">
                {tags.map(({ tag_id, name }) => {
                  return (
                    <span
                      key={tag_id}
                      className="inline-block border-2 border-teal-500 text-teal-500 rounded-full px-3 py-1 text-sm mr-1 mb-1"
                      onClick={()=>setKeywords(name)}
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
