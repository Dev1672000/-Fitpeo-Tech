import React, { useState } from "react";
import { PiCircleDashedFill, PiProhibitInsetBold } from "react-icons/pi";
import { RiDashboard2Line } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { SiDrupal } from "react-icons/si";
import {
  IoIosArrowForward,
  IoIosHelpCircleOutline,
  IoIosArrowDown,
} from "react-icons/io";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-[#000075] h-screen flex flex-col justify-between p-4">
      <div>
        <h1 className="text-white text-2xl mx-auto font-bold flex gap-2 items-center">
          <PiCircleDashedFill size={30} />
          <span className="hidden sm:block">Dashboard</span>
        </h1>
        <ul className="text-white mt-8">
          <li
            className={`mb-4 rounded-lg px-2 py-2 ${
              activeItem === "dashboard" ? "bg-[#36429e61]" : ""
            }`}
          >
            <a
              href="#"
              className="text-lg items-center flex gap-2"
              onClick={() => handleItemClick("dashboard")}
            >
              <MdDashboardCustomize size={25} />
              <span className="hidden sm:block">Dashboard</span>
            </a>
          </li>
          <li
            className={`mb-4 flex justify-between items-center rounded-lg md:px-2 px-1 py-2 ${
              activeItem === "product" ? "bg-[#36429e61]" : ""
            }`}
          >
            <a
              href="#"
              className="text-lg items-center flex gap-2"
              onClick={() => handleItemClick("product")}
            >
              <RiDashboard2Line size={25} />
              <span className="hidden sm:block">Product</span>
            </a>
            <IoIosArrowForward size={25} />
          </li>
          <li
            className={`mb-4 flex justify-between items-center rounded-lg md:px-2 px-1 py-2 ${
              activeItem === "Customers" ? "bg-[#36429e61]" : ""
            }`}
          >
            <a
              href="#"
              className="text-lg items-center flex gap-2"
              onClick={() => handleItemClick("Customers")}
            >
              <AiOutlineContacts size={25} />
              <span className="hidden sm:block">Customers</span>
            </a>
            <IoIosArrowForward size={25} />
          </li>
          <li
            className={`mb-4 flex justify-between items-center rounded-lg md:px-2 px-1 py-2 ${
              activeItem === "Income" ? "bg-[#36429e61]" : ""
            }`}
          >
            <a
              href="#"
              className="text-lg items-center flex gap-2"
              onClick={() => handleItemClick("Income")}
            >
              <SiDrupal size={25} />{" "}
              <span className="hidden sm:block">Income</span>
            </a>
            <IoIosArrowForward size={25} />
          </li>
          <li
            className={`mb-4 flex justify-between items-center rounded-lg md:px-2 px-1 py-2 ${
              activeItem === "Promo" ? "bg-[#36429e61]" : ""
            }`}
          >
            <a
              href="#"
              className="text-lg items-center flex gap-2"
              onClick={() => handleItemClick("Promo")}
            >
              <PiProhibitInsetBold size={25} />{" "}
              <span className="hidden sm:block">Promo</span>
            </a>
            <IoIosArrowForward size={25} />
          </li>
          <li
            className={`mb-4 flex justify-between items-center rounded-lg md:px-2 px-1 py-2 ${
              activeItem === "Help" ? "bg-[#36429e61]" : ""
            }`}
          >
            <a
              href="#"
              className="text-lg items-center flex gap-2"
              onClick={() => handleItemClick("Help")}
            >
              <IoIosHelpCircleOutline size={25} />{" "}
              <span className="hidden sm:block">Help</span>
            </a>
            <IoIosArrowForward size={25} />
          </li>
        </ul>
      </div>
      <div>
        <div className="rounded-lg flex justify-between md:bg-[#252f7b5b] md:px-2 items-center text-white bottom-1">
          <button className="flex gap-2 items-center text-white md:p-2  rounded">
            <img src="./profile.png" alt="" className="md:w-16 w-10" />
            <div>
              <h1 className="text-lg hidden sm:block font-semibold">
                Devendra
              </h1>
              <p className="hidden sm:block">Project</p>
            </div>
          </button>
          <IoIosArrowDown size={25} className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
