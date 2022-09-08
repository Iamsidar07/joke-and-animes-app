import React from "react";
import { Fade } from "react-reveal";

const Quote = ({ quotes }) => {
  return (
    <div className="inline-grid  rounded-3xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:p-3 ">
      {quotes?.length == 0 ? (
        <p>Loading</p>
      ) : (
        quotes?.map((quote) => {
          return (
            <Fade key={quote?.quote} bottom>
              <div className=" p-2 rounded-xl inline shadow-lg  group my-1 md:m-3  md:p-3 transition-transform duration-200 ease-in transform cursor-pointer md:hover:text-teal-500 ">
                <h1 className=" text-3xl  my-2 ">
                  <small className=" text-xl  font-normal text-gray-400">
                    character-
                  </small>
                  {quote.character}
                </h1>
                <p className='p-2 border-l-4 border-pink-500'>{quote?.quote}</p>
                <p className=" mt-2 md:opacity-0 md:group-hover:opacity-100 duration-500 ">
                  <small className="text-gray-400  ">Anime-</small>
                  {quote?.anime}
                </p>
              </div>
            </Fade>
          );
        })
      )}
    </div>
  );
};

export default Quote;
