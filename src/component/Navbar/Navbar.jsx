import React from "react";

const Navbar = () => {
  return (
    <div className="border-b-2 bg-white border-b-gray-100">
      <div className="navbar  mx-auto max-w-7xl ">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold">CS — Ticket System</h1>
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
      </div>
    </div>
  );
};

export default Navbar;
