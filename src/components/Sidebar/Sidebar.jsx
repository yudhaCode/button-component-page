import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen pt-2.94 pr-4.16 pl-3.53 space-y-28">
      <Logo />
      <Menu />
    </div>
  );
};

export default Sidebar;
