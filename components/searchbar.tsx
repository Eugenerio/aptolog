import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchButton: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  handleSearchButton,
}) => {
  return (
    <div className="mb-8 relative">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-0 pl-3">
          <FontAwesomeIcon icon={faSearch} className="text-white" size="lg" />
        </div>
        <div className="w-[700px]">
          {" "}
          {/* Adjust the width of this container */}
          <input
            value={value}
            onChange={onChange}
            placeholder="FIND THE PACKAGE"
            className="font-sf-pixelate w-full p-4 bg-transparent text-white border-white border rounded-none pl-[50px] pr-[120px]"
          />
        </div>
        <button
          onClick={handleSearchButton}
          className="font-sf-pixelate absolute border w-[20%] border-white bg-[#1b1b1b] text-white text-xl right-0 top-0 h-full cursor-pointer hover:bg-white hover:text-black"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
