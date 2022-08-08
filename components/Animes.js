import React from "react";

import { Fade } from "react-reveal";
import CustomImage from "./CustomImage";
const Animes = ({ animes }) => {
  return (
    <div className=" w-full mx-auto gap-2 max-w-full  grid grid-cols-1 md:grid-cols-3  ">
      {animes.images?.map(({ url, width, height, image_id, tags }) => {
        return (
          <Fade bottom key={image_id}>
            <div className="shadow-[rgba(0, 0, 0, 0.08) 0px 4px 12px;] w-full   group   rounded overflow-hidden  box-shadow">
              <CustomImage
                url={url}
                layout="responsive"
                width={1080}
                height={1080}
                objectFit="cover"
                objectPosition={"top"}
                customClassName={
                  typeof url == undefined
                    ? " rounded-md hidden max-w-full h-fit md:h-auto md:cursor-pointer md:group-hover:scale-125 transition-all ease-in duration-200"
                    : " rounded  max-w-full h-fit md:h-auto md:cursor-pointer md:group-hover:scale-125 transition-all ease-in duration-200"
                }
              />
              <div className="cursor-pointer px-2 py-3">
                <p className=" ">{tags[1]?.description}</p>
              </div>
              <div className=" cursor-pointer p-2 ">
                {tags.map(({ tag_id, name }) => {
                  return (
                    <span
                      key={tag_id}
                      className="inline-block border-2 border-teal-500 text-teal-500 rounded-full px-3 py-1 text-sm mr-1 mb-1"
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
