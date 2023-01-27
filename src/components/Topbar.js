import React from "react";
import { BsFacebook, BsMessenger, BsBellFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const Topbar = () => {
  return (
    <div className="flex flex-row justify-between px-2 py-1 items-center ">
      <div className="flex flex-row gap-2 items-center ">
        <BsFacebook className="text-blue-500 h-10 w-10" />
        <div className="h-10 w-56 bg-[#E6E6E6] rounded-full flex flex-row items-center text-[#687A86] gap-2 px-2 ">
          <GoSearch className="font-bold " />
          <p>Search Facebook</p>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <div className="h-10 w-32 hover:bg-[#E7E7E7] flex items-center justify-center rounded-md py-1">
          <AiOutlineHome className="text-3xl" />
        </div>
        <div className="h-10 w-32 hover:bg-[#E7E7E7] flex items-center justify-center rounded-md py-1">
          <FaUserFriends className="text-3xl" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between gap-2">
        <div className=" flex items-center justify-center">
          <BsMessenger className=" h-10 w-10 bg-[#E6E6E6] rounded-full p-[0.5rem] " />
        </div>
        <div className="flex items-center justify-center ">
          <BsBellFill className="h-10 w-10 bg-[#E6E6E6] rounded-full p-[0.5rem] " />
        </div>

        <div className="h-10 w-10 rounded-full overflow-clip border-2 border-gray-500 ">
          <img
            className="object-contain"
            src="/assets/images/Asim_Profile_Pic.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
