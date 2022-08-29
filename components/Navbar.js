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
  const [navColor,setNavColor]=useState(false);
  
  useEffect(()=>{
    handleNavbar();
    window.addEventListener("scroll",handleNavbar);
  },[])
const handleNavbar=()=>{
  if(window.scrollY>=60) {
    setNavColor(true);
  }else{
    setNavColor(false);
  }
}
console.log(navColor)



  return (
    <nav className={`md:fixed  sticky top-0 right-0 left-0 ${navColor?" bg-white md:bg-white/90 box-shadow md:block ":"block md:hidden"}  transition-all duration-250 ease-in z-[100] px-3 py-2` }>
      <div className="max-w-7xl mx-auto">
      <div className="flex  items-center justify-between   md:px-10 ">
        <div className="z-[50]">
        <Link href={"/"}>
        <div className="w-16 h-16 relative cursor-pointer">
        <Image
            src={"https://iconape.com/wp-content/files/vc/201433/png/201433.png"}
            layout="fill"
            objectFit="contain"
            priority
            alt="Logo"
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
            alt="menu"
          />
        </div>
        </div>

        <ul
          className={`  h-screen md:h-fit flex flex-col items-center jus md:flex-row  border-gray-100 border-t-2 md:border-none  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[0] left-0 w-full md:w-auto md:pl-0  text-center transition-all duration-250 ease-in ${
            open ? " top-20 bg-white" : "top-[-490px] "
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className={` group whitespace-nowrap text-lg md:my-0 text-left p-3 md:hover:text-blue-500  rounded-full transition-all ease-in duration-100 cursor-pointer ${navColor?"text-black":"text--500"}`}
            >
              <Link href={link.link}>
                <a >
                  {link.name}
                </a>
              </Link>
              <small className="hidden pl-1 md:inline-block opacity-0 md:group-hover:opacity-100 md:group-hover:animate-bounce">
                {link.icon}
              </small>
            </li>
          ))}
          <button className="text-white bg-blue-500 md:hover:bg-blue-600 md:hover:-translate-y-1 transition-all duration-75 ease-in  px-6 py-3  md:ml-2 mt-4 md:mt-0 rounded-full ">
            <Link href={"https://twitter.com/iamsidar07"}>Follow 🕊️</Link>
          </button>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
