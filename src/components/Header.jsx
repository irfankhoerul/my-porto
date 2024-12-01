import React from "react";
import Logo from "../assets/my-logo.svg";

const Header = () => {
  return (
    <header className="py-2 mb-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#home">
            <img src={Logo} alt="" className="w-20 h-20" />
          </a>
          <button className=" btn btn-sm text-white text-sm">Work With Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
