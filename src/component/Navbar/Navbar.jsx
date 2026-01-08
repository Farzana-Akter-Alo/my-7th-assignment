import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-2 bg-white border-b-gray-100">
      <div className="navbar  mx-auto max-w-7xl px-8 sm:px-8 lg:px-2">
        <div className="navbar-start">
          <h1 className="text-xl text-black lg:text-2xl font-bold">CS — Ticket System</h1>
        </div>
        <div className="navbar-end gap-4 hidden lg:flex">
          {/* for nav list */}
          <ul className="gap-2 menu menu-horizontal px-1 text-black">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <div className="">
            <button className="text-sm btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2] hover:from-[#ab9ac4] hover:to-[#7f6ea0] transition-all duration-300">
              <span>+</span> New Ticket
            </button>
          </div>
        </div>

        {/* mobile hamburger */}
        <div className="navbar-end lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden px-6 py-4 bg-white border-t">
            <ul className="flex flex-col gap-3 text-black">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>

            <button className="w-full mt-4 btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2] hover:from-[#ab9ac4] hover:to-[#7f6ea0] transition-all duration-300">
              <span>+</span> New Ticket
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
