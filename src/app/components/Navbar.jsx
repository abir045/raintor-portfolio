"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import arrow from "../../../public/images/arrow.png";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between w-full relative dark:bg-slate-900 bg-white rounded-full px-4 sm:px-8 lg:px-[50px] py-4 sm:py-6 lg:py-[28px]">
        <span className="font-bw-gradual text-xl sm:text-2xl lg:text-[34px] font-extrabold">
          DEVLOP.ME
        </span>

        {/* nav links - Now shows on tablets (md) and larger */}
        <div className="flex items-center gap-[10px]">
          <ul className="items-center gap-4 lg:gap-[20px] text-sm lg:text-[1rem] text-[#424242] md:flex hidden lg:mr-[67px] md:mr-[20px]">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Home
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              About
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Portfolio
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Blog
            </li>
          </ul>

          {/* Start Project Button - Shows on tablets and larger */}
          <button className="hidden md:flex items-center justify-between py-2 lg:py-[7px] border text-sm lg:text-[1rem] px-3 lg:px-[16px] rounded-full capitalize transition-all duration-300">
            <Image
              src={arrow}
              alt=""
              className="-ml-3 lg:-ml-4 w-[38px] h-[38px]"
            />
            <span className="text-sm lg:text-base ml-2 lg:ml-[9px]">
              Start Project
            </span>
          </button>

          {/* Mobile Menu Toggle - Only shows on mobile (below md) */}
          {mobileSidebarOpen ? (
            <IoClose
              className="text-2xl dark:text-[#abc2d3] text-[#424242] cursor-pointer md:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
          ) : (
            <CiMenuFries
              className="text-2xl dark:text-[#abc2d3] text-[#424242] cursor-pointer md:hidden"
              onClick={() => setMobileSidebarOpen(true)}
            />
          )}
        </div>

        {/* mobile sidebar - Only shows on mobile (below md) */}
        <aside
          className={`${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-50"
              : "translate-x-full opacity-0 z-[-1]"
          } md:hidden bg-white dark:bg-slate-800 shadow-lg p-6 fixed top-0 right-0 h-full w-80 max-w-[85vw] transition-all duration-300 ease-in-out`}
        >
          {/* Mobile Sidebar Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-bw-gradual text-xl font-extrabold text-gray-900 dark:text-white">
              DEVLOP.ME
            </span>
            <IoClose
              className="text-2xl dark:text-[#abc2d3] text-[#424242] cursor-pointer"
              onClick={() => setMobileSidebarOpen(false)}
            />
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-6 text-lg text-gray-600 dark:text-[#abc2d3] mb-8">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize py-2">
              Home
            </li>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize py-2">
              About
            </li>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize py-2">
              Portfolio
            </li>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize py-2">
              Blog
            </li>
          </ul>

          {/* Mobile Start Project Button */}
          <button className="flex items-center justify-center w-full py-4 border border-gray-300 dark:border-gray-600 text-base rounded-full capitalize transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-700 dark:text-white">
            <Image src={arrow} alt="" className="-ml-2 w-5 h-5" />
            <span className="ml-3">Start Project</span>
          </button>
        </aside>

        {/* Mobile Sidebar Overlay - Only shows on mobile */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
