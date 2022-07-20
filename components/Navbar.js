import React, { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [navbg,setNavbg]=useState(false);
  
  useEffect(()=>{
    window.onscroll = function() {scrollFunction()};
  },[])



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    setNavbg(true);
  }else if(document.body.scrollHeight > 20 || document.documentElement.scrollHeight > 20){
    setNavbg(false);
  }
}

  return (
    <div className={navbg?"bg-gray-900 w-full md:bg-slate-100 md:h-20 text-white  shadow-sm z-[10]   p-2 sticky top-0 left-0 right-0 md:transition-all ease-in md:duration-500":"bg-gray-900 md:bg-transparent md:h-20 text-white  shadow-sm z-[10]  w-full p-2 sticky top-0 left-0 right-0 md:transition-all ease-in md:duration-500"}>
      <div className="flex  items-center justify-between   md:px-10 ">
        <Link href={"/"}>
          <div className="text-4xl p-2  font-serif justify-center  my-auto group cursor-pointer flex items-center animate-pulse md:hover:animate-spin">
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
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className={navbg?" group whitespace-nowrap text-sm md:my-0 text-left p-3 md:hover:bg-gray-400/60  rounded-full transition-all ease-in duration-100 cursor-pointer":"cursor-pointer  group whitespace-nowrap text-sm md:my-0 text-left p-3 md:hover:bg-gray-800 rounded-full transition-all ease-in duration-100"}
            >
              <Link href={link.link}>
                <a className={navbg?"md:text-black":""}>
                  {link.name}
                </a>
              </Link>
              <small className="hidden pl-1 md:inline-block opacity-0 md:group-hover:opacity-100 md:group-hover:animate-bounce">
                {link.icon}
              </small>
            </li>
          ))}
          <button className="bg-blue-500 md:hover:bg-orange-500 md:hover:-translate-y-1 transition-all duration-75 ease-in  px-6 py-3  md:ml-2 mt-4 md:mt-0 rounded-full animate-bounce md:animate-none ">
            <Link href={"https://twitter.com/iamsidar07"}>Follow 🕊️</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
