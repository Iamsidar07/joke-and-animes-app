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
    <div className="md:h-20 text-white bg-transparent shadow-sm z-[10]  w-full p-2 ">
      <div className="flex  items-center justify-between   md:px-10 ">
        <Link href={"/"}>
          <div className="text-4xl p-2  font-serif justify-center font-bold my-auto group cursor-pointer flex items-center animate-pulse md:animate-spin">
            ⚡
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-6 top-6 cursor-pointer md:hidden"
        >
          {open ? "❎" : "🧱"}
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
                <a className="text-white md:text-white  md:hover:text-gray-400 duration-500 ">
                  {link.name}
                </a>
              </Link>
              <small className="hidden md:inline-block opacity-0 md:group-hover:opacity-100 md:group-hover:animate-bounce">
                {link.icon}
              </small>
            </li>
          ))}
          <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 md:py-3 md:ml-2 mt-4 md:mt-0 rounded-full animate-bounce md:animate-none font-bold">
            <Link href={"https://twitter.com/iamsidar07"}>
              follow🕊️
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
