import React from "react";
import { TextField } from "@mui/material";
import Fab from "@mui/material/Fab";

const Search = ({ funCall, keywords, setKeywords }) => {
 
  return (
    <div>
      <form className="w-[99%] md:w-[40%] mb-3  mx-auto z-[1200]" onSubmit={funCall}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between">

          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm bg-slate-100  rounded-lg border-none outline-none   "
            placeholder="Search keywords..."
            required=""
            spellCheck={false}
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />

          </div>


          <button
            onClick={funCall}
            type="submit"
            className="text-white  absolute right-2.5 bottom-2.5  bg-gradient-to-tr from-[#D4145A] to-[#FBB03B]  text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
