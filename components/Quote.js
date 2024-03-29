import Image from "next/image";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import copyToClipboard from "./copyToClipboard";

const Quote = ({ quotes }) => {
  const [isCopied, setIsCopied] = useState(-1);
  return (
    <div className="inline-grid  rounded-3xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:p-3 2xl:grid-cols-4 ">
      {quotes?.length == 0 ? (
        <p>Loading</p>
      ) : (
        quotes?.map((quote) => {
          
          return (
            <Fade key={quote?.quote} bottom>
              <div className=" p-2 rounded inline  shadow-sm  group my-1 md:m-3  md:p-3 transition-all duration-150 ease-in transform cursor-pointer md:hover:text-violet-500 md:hover:shadow-2xl  ">
               
                <h1 className=" text-lg  my-2 ">
                  <small className="  font-normal text-gray-400">
                    character-
                  </small>
                  {quote.character}
                </h1>
                <p className='p-2 border-l-4 border-pink-500'> ❝ {quote?.quote} ❞</p>
                <p className=" mt-2 md:opacity-0 md:group-hover:opacity-100 duration-500 ">
                  <small className="text-gray-400  ">Anime-</small>
                  {quote?.anime}
                </p>
                <div className='absolute bottom-0 right-2  ' onClick={() => {
                  copyToClipboard("Character" + quote?.character + ". " + quote?.quote + " Anime" + quote?.anime);
                  setIsCopied(quote);
                  setTimeout(() => setIsCopied(false), 1000);
                }}>
                  {isCopied===quote && <small className='relative  bottom-1 right-2 text-black font-bold '>copied</small>}
                  <Image
                    src={"/copy.png"}
                    width={15}
                    height={15}
                    objectFit="contain"
                  />
                </div>
                
              </div>
            </Fade>
          );
        })
      )}
    </div>
  );
};

export default Quote;
