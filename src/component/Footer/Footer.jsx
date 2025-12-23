import React from "react";
import Icon1 from "../../assets/icon.1.png";
import Icon2 from "../../assets/icon.2.png";
import Icon3 from "../../assets/icon.3.png";
import Icon4 from "../../assets/icon.4.png";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-14">
      <div className="mx-auto max-w-7xl">
        {/* full footer */}
        <div className="  grid grid-cols-5 gap-14 py-14">
          {/* 1st content */}
          <div>
            <h3 className="text-lg font-bold">CS — Ticket System</h3>
            <p className="text-sm text-gray-400 mt-3">
              CS — Ticket System is a customer support management application
              designed to organize and track tickets efficiently. Users can view
              open tickets, move them to task status, and mark them as resolved,
              ensuring a smooth and structured support workflow.
            </p>
          </div>
          {/* 2nd content */}
          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="text-sm text-gray-400 mt-3 space-y-3">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Our Mission</a>
              </li>
              <li>
                <a href="">Contact Saled</a>
              </li>
            </ul>
          </div>
          {/* 3rd content */}
          <div>
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="text-sm text-gray-400 mt-3 space-y-3">
              <li>
                <a href="">Products & Services</a>
              </li>
              <li>
                <a href="">Customer Stories</a>
              </li>
              <li>
                <a href="">Download Apps</a>
              </li>
            </ul>
          </div>
          {/* 4th content */}
          <div>
            <h3 className="text-lg font-bold">Information</h3>
            <ul className="text-sm text-gray-400 mt-3 space-y-3">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Join Us</a>
              </li>
            </ul>
          </div>
          {/* 5th content */}
          <div>
            <h3 className="text-lg font-bold">Social Links</h3>
            <ul className="text-sm text-gray-400 mt-3 space-y-3 ">
              <li>
                <a href="" className="flex items-center gap-2">
                  {" "}
                  <img src={Icon1} alt="" /> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-2">
                  <img src={Icon2} alt="" /> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-2">
                  {" "}
                  <img src={Icon3} alt="" /> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-2">
                  <img className="" src={Icon4} alt="" /> support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* copyright content */}
        <div className="text-center border-t border-t-gray-900 py-6 ">
          <p className="text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
