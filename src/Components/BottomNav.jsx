import React from "react";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#0c1831] border-t-1 border-zinc-600 rounded-t-lg text-white px-5 md:px-[20vw] py-3 flex justify-between items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[.6rem] w-1/4 uppercase tracking-tight flex flex-col items-center justify-center ${
            isActive ? "text-blue-500 underline" : "text-white"
          }`
        }
      >
        <GoHome fontSize={"1.4rem"} /> HOME
      </NavLink>

      <NavLink
        to="/roadmap"
        className={({ isActive }) =>
          `text-[.6rem] w-1/4 uppercase tracking-tight flex flex-col items-center justify-center ${
            isActive ? "text-blue-500 underline" : "text-white"
          }`
        }
      >
        <MdOutlineExplore fontSize={"1.4rem"} /> Roadmaps
      </NavLink>

      <NavLink
        to="/my-learning"
        className={({ isActive }) =>
          `text-[.6rem] w-1/4 uppercase tracking-tight flex flex-col items-center justify-center ${
            isActive ? "text-blue-500 underline" : "text-white"
          }`
        }
      >
        <AiOutlinePlaySquare fontSize={"1.4rem"} /> My Learning
      </NavLink>
    </div>
  );
};

export default BottomNav;
