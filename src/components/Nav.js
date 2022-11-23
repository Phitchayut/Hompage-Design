import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/logo.svg";

const navList = [
  {
    navName: "Home"
  },
  {
    navName: "New"
  },
  {
    navName: "Popular"
  },
  {
    navName: "Trending"
  },
  {
    navName: "Category"
  }
];
const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="h-20 flex justify-between items-center px-8">
      <div>
        <img src={Logo} alt="" />
      </div>
      <ul className="hidden md:flex space-x-10">
        {navList.map((item, index) => (
          <li key={index} className="cursor-pointer">
            {item.navName}
          </li>
        ))}
      </ul>

      {/* mobile bar */}
      <div
        className="text-3xl md:hidden block cursor-pointer"
        onClick={() => setNav(!nav)}
      >
        {!nav ? <FaBars /> : <IoMdClose size={40} />}
      </div>

      {/* mobile menu */}
      <div
        className={
          nav
            ? "w-full bg-black text-white absolute py-5 top-[80px] left-0 flex justify-center text-center"
            : "absolute left-[-100%]"
        }
      >
        <ul className="space-y-8">
          {navList.map((item, index) => (
            <>
              <li key={index} className="cursor-pointer text-2xl">
                {item.navName}
              </li>
            </>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
