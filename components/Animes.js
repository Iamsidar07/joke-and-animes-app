import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
const Animes = ({ animes }) => {
  const [load, setLoad] = useState(true);
  return (
    <div className="p-1 w-full grid grid-cols-1 md:grid-cols-3  ">
      {animes.images?.map(({ url, width, height, image_id, tags }) => {
        return (
          <Fade bottom key={image_id}>
            <div className=" mx-auto h-fit  md:w-auto w-full bg-[#1e293b] text-white  my-2 md:m-3  group   rounded overflow-hidden shadow-md md:hover:shadow-lg">
              <Image
                className={
                  typeof url == undefined
                    ? "  hidden w-full md:cursor-pointer md:group-hover:scale-125 transition-all ease-in duration-200"
                    : "  w-full md:cursor-pointer md:group-hover:scale-125 transition-all ease-in duration-200"
                }
                src={url}
                layout="responsive"
                width={width}
                height={height}
                alt={image_id}
                placeholder="blur"
                blurDataURL={url}
                priority
                onLoadingComplete={() => setLoad(false)}
              />
              <div className="cursor-pointer px-6 py-3">
                <p className="text-gray-400 font-bold md:group-hover:font-bold text-base">
                  {tags[1]?.description}
                </p>
              </div>
              <div className=" cursor-pointer px-6 ">
                {tags.map(({ tag_id, name }) => {
                  return (
                    <span
                      key={tag_id}
                      className="inline-block bg-black/40  md:group-hover:font-bold  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
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
