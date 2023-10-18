import React from 'react'
import { IoSearch } from "react-icons/io5";
const SearchBar = () => {
  return (
    <div  className="">
      <div className="flex py-2 rounded-lg items-center">
        <button className="bg-white  px-2 py-1">
          <IoSearch size={24} color="gray" />
        </button>
        <input type="text" placeholder="Search..." className=" py-1 md:w-full w-1/2 " />
      </div>
    </div>
  );
}

export default SearchBar