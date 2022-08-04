import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
const Animes = ({ animes }) => {
  const [load, setLoad] = useState(true);
  return (
    <div className="p-1 w-full gap-2 grid grid-cols-1 md:grid-cols-3  ">
      {animes.images?.map(({ url, width, height, image_id, tags }) => {
        return (
          <Fade bottom key={image_id}>
            <div className="max-w-sm mx-auto shadow-[rgba(0, 0, 0, 0.08) 0px 4px 12px;] w-full my-2 md:m-3  group   rounded overflow-hidden  p-2  box-shadow" >
              <Image
                className={
                  typeof url == undefined
                    ? "  hidden max-w-full h-fit md:h-auto md:cursor-pointer md:group-hover:scale-125 transition-all ease-in duration-200"
                    : "  max-w-full h-fit md:h-auto md:cursor-pointer md:group-hover:scale-125 transition-all ease-in duration-200"
                }
                src={url}
                layout="responsive"
                width={1080}
                height={1080}
                alt={image_id}
                placeholder="blur"
                objectFit="cover"
                blurDataURL={url}
                priority
                onLoadingComplete={() => setLoad(false)}
              />
              <div className="cursor-pointer px-2 py-3">
                <p className=" ">
                  {tags[1]?.description}
                </p>
              </div>
              <div className=" cursor-pointer px-2 ">
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
