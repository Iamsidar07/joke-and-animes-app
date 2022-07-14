import React, { useState } from "react";
import Button from "./Button";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/", id: 0, icon: "🏠" },
    { name: "Anime's", link: "/anime", id: 1, icon: "🥰" },
    { name: "Jokes", link: "/joke", id: 2, icon: "🤣" },
    { name: "Memes", link: "/meme", id: 3, icon: "🤪" },
    { name: "Anime's Quotes", link: "/quotes", id: 4, icon: "✅" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="md:h-20 text-white bg-transparent shadow-sm z-[10]  w-full ">
      <div className="md:flex  items-center justify-between  py-4 md:px-10 px-7">
        <Link href={"/"}>
          <div
            className="text-6xl font-serif justify-center font-bold my-auto group cursor-pointer flex items-center 
"
          >
            M
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <XIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
          )}
        </div>

        <ul
          className={`flex flex-col items-center md:flex-row bg-[#0f172a] md:bg-transparent text-white md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[100] left-0 w-full md:w-auto md:pl-0 justify-center text-center transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className="md:ml-1 group whitespace-nowrap text-sm md:my-0 text-left p-3 rounded-md md:hover:bg-[#1e293b]"
            >
              <Link href={link.link}>
                <a className="text-white md:text-white  hover:text-gray-400 duration-500 ">
                  {link.name}
                </a>
              </Link>
              <small className="hidden md:inline-block opacity-0 group-hover:opacity-100 group-hover:animate-bounce">
                {link.icon}
              </small>
            </li>
          ))}
          <Button>
            <Link href={"https://twitter.com/iamsidar07"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </Link>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
