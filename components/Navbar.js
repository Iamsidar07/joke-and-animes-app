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
  if(window.scrollY>=90) {
    setNavColor(true);
  }else{
    setNavColor(false);
  }
}




  return (
    <nav className={`bg-violet-100   sticky top-0 right-0 left-0 transition-all duration-250 ease-in z-[20] px-3 py-2` }>
      <div className="max-w-7xl mx-auto h-16">
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
          className={`  h-[88vh] md:h-fit flex flex-col items-center  md:flex-row  border-gray-100 border-t-2 md:border-none  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[0] left-0 w-full md:w-auto md:pl-0  text-center transition-all duration-250 ease-in ${
            open ? " top-20 bg-violet-100" : "top-[-76vh] "
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className={` group whitespace-nowrap text-base md:my-0 text-left p-3 md:hover:text-violet-500  rounded-full transition-all ease-in duration-100 cursor-pointer `}
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

          <Link href="https://instagram.com/iamsidar07" target={"_blank"}>
           <button className="px-3 rounded-full py-2 md:py-3 border-none bg-green-800 text-white md:hover:bg-green-700 md:hover:translate-y-2 transition-all duration-150 ease-in tracking-wider w-full md:w-1/2">
            FOLLOW 🐓
           </button>
           </Link>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
