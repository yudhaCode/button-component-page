import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex md:flex-col flex-row justify-between p-4 md:h-screen md:pt-2.94 md:pr-4.16 md:pl-3.53 md:space-y-28 w-full">
      <nav className="flex flex-col space-y-2 text-nav-default font-medium text-sm md:space-y-8  md:flex relative w-full">
        <Logo />
        <Menu />
      </nav>
    </div>
  );
};

export default Navbar;
