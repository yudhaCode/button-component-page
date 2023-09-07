import React from "react";
import { navLinks } from "../Constant";
import { useState } from "react";
import { close, menu } from "../../assets";

const Menu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="flex flex-col space-y-2 text-nav-default font-medium text-sm md:space-y-8  md:flex relative w-full">
        {navLinks.map((nav, index) => (
          <a
            href={`#${nav.id}`}
            className={`hover:text-button-hover cursor-pointer ${
              nav.id === "buttons" ? "text-nav-active font-bold" : ""
            } hidden md:flex`}
            key={nav.id}
          >
            {nav.title}
          </a>
        ))}

        <div className="sm:hidden flex flex-1 items-end flex-col absolute -top-8 right-0 cursor-pointer">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-4 h-4 object-contain "
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-2 flex flex-col space-y-6`}
        >
          {navLinks.map((nav, index) => (
            <a
              href={`#${nav.id}`}
              className={`hover:text-button-hover cursor-pointer ${
                nav.id === "buttons" ? "text-nav-active font-bold" : ""
              } `}
              key={nav.id}
            >
              {nav.title}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Menu;
