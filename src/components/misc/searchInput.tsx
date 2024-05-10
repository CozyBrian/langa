import React from "react";
import { SearchIcon } from "../../assets/icons";

const SearchInput = () => {
  return (
    <div className="relative w-[400px] h-11">
      <img
        src={SearchIcon}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px]"
        alt="searchIcon"
      />
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full px-4 pl-11 bg-[#F6F6F6] border border-[#EAECF0] focus:border-[#cdcfd2] rounded-2xl outline-none placeholder:text-[#667085] duration-100"
      />
    </div>
  );
};

export default SearchInput;
