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
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    handleNavbar();
    window.addEventListener("scroll", handleNavbar);
  }, [])
  const handleNavbar = () => {
    if (window.scrollY >= 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }




  return (
    <nav className={` bg-white  shadow-sm sticky top-0 right-0 left-0 transition-all duration-250 ease-in z-[20]  py-1 `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex  items-center justify-between  ">
          <div className="z-[50]">
            <Link href={"/"}>

              <Image
                src={"/logo.png"}
                objectFit="cover"
                alt="logo"
                width={200}
                height={40}
                className="cursor-pointer"

              />

            </Link>
            <div
              onClick={() => setOpen(!open)}
              className="  absolute right-2 top-2 cursor-pointer md:hidden"
            >
              <Image
                src={open ? "/cross.svg" : "/menu.svg"}
                width={30}
                height={30}
                alt="menu"
              />
            </div>
          </div>

          <ul
            className={` md:h-fit flex flex-col items-center space-x-1 md:flex-row  border-gray-100  md:border-none  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[0] right-0 w-[80%] md:w-auto md:pl-0  text-center transition-all duration-250 ease-in ${open ? " top-12 bg-white  h-[95vh] " : "top-[-76vh] "
              }`}
          >
            {Links.map((link) => (
              <li
                key={link.id}
                className={` group whitespace-nowrap  md:my-0 text-left p-3 md:hover:text-[#0082FF]  rounded-full transition-all ease-in duration-100 cursor-pointer `}
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
              <button className="px-5  rounded-full py-2   border-none shadow-lg  bg-[#0082FF] text-white md:hover:bg-[#0084ffd6]  md:hover:translate-y-2 transition-all duration-150 ease-in tracking-wider ">
                follow🐓
              </button>
            </Link>
          </ul>
        </div>
       </div>
       

    </nav>
  );
};

export default Navbar;
