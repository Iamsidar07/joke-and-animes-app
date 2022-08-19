import React, { useEffect, useState } from "react";
import Button from "./Button";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  let Links = [
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
    <nav className={navbg?"shadow-sm w-full bg-white z-[100]   p-2 sticky top-0 left-0 right-0 md:transition-all ease-in md:duration-500":" shadow-sm z-[10]  w-full p-2 sticky top-0 left-0 right-0 md:transition-all ease-in md:duration-500"}>
      <div className="max-w-5xl mx-auto">
      <div className="flex  items-center justify-between   md:px-10 ">
        <div className="z-[50]">
        <Link href={"/"}>
        <div className="w-20 h-20 relative cursor-pointer">
        <Image
            src={"https://iconape.com/wp-content/files/vc/201433/png/201433.png"}
            layout="fill"
            objectFit="contain"
            priority
           />
        </div>
          
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className=" text-2xl absolute right-6 top-6 cursor-pointer md:hidden"
        >
          <Image
            src={open?"/cross.svg":"/menu.svg"}
            width={40}
            height={40}
          />
        </div>
        </div>

        <ul
          className={`bg-white flex flex-col items-center justify-center md:flex-row  border-gray-100 border-t-2 md:border-none md:bg-transparent  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[0] left-0 w-full md:w-auto md:pl-0  text-center transition-all duration-500 ease-in ${
            open ? "top-24" : "top-[-490px] "
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className={navbg?" group whitespace-nowrap text-sm md:my-0 text-left p-3 md:hover:text-blue-500  rounded-full transition-all ease-in duration-100 cursor-pointer":" cursor-pointer  group whitespace-nowrap text-sm md:my-0 text-left p-3 md:hover:text-blue-500 rounded-full transition-all ease-in duration-100"}
            >
              <Link href={link.link}>
                <a>
                  {link.name}
                </a>
              </Link>
              <small className="hidden pl-1 md:inline-block opacity-0 md:group-hover:opacity-100 md:group-hover:animate-bounce">
                {link.icon}
              </small>
            </li>
          ))}
          <button className="text-white bg-blue-500 md:hover:bg-blue-600 md:hover:-translate-y-1 transition-all duration-75 ease-in  px-6 py-2  md:ml-2 mt-4 md:mt-0 rounded-full ">
            <Link href={"https://twitter.com/iamsidar07"}>Follow 🕊️</Link>
          </button>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
