import React from "react";

const Menu = () => {
  return (
    <div className="flex flex-col space-y-2 text-nav-default font-medium text-sm space-y-8">
      <a href="#" className="hover:text-button-hover cursor-pointer`">
        Colors
      </a>
      <a href="#" className="hover:text-button-hover cursor-pointer`">
        Typography
      </a>
      <a href="#" className="hover:text-button-hover cursor-pointer`">
        Spaces
      </a>
      <a href="#" className="hover:text-button-hover cursor-pointer`">
        Buttons
      </a>
      <a
        href="#"
        className="hover:text-button-hover cursor-pointer` text-nav-active font-bold"
      >
        Input
      </a>
      <a href="#" className="hover:text-button-hover cursor-pointer`">
        Grid
      </a>
    </div>
  );
};

export default Menu;
