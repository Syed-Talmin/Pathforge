import React, { useContext, useEffect, useState } from "react";
import { RaodmapContext } from "../context/RaodmapContext";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const { setIsDark, isDark } = useContext(RaodmapContext);
  let darkLight = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div className="navbar md:px-10 fixed z-10 w-full overflow-hidden h-15 flex flex-col justify-between items-center bg-[#0c1831] text-white p-4">
      <div className=" w-full flex items-center justify-between">
        <div className="text-2xl italic font-bold">PATHFORGE</div>
        <div className="flex gap-5 items-center">
          <div onClick={darkLight} className="text-xl">
            {isDark ? (
              <IoMoonOutline className="text-2xl cursor-pointer" />
            ) : (
              <MdOutlineWbSunny className="text-2xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Navbar;
