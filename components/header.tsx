import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import Link from "next/link";

const Header: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleIconClick = (network: string) => {
    // Handle the click action for each network (Twitter, Wallet, GitHub)
    console.log(`Clicked on ${network}`);
  };

  return (
    <header className="bg-[#1b1b1b] py-4 mx-auto">
      <div className="container mx-auto bg-gray-1b1b1b py-4 flex items-center justify-between rounded">
        <div className="flex items-center">
          <Link legacyBehavior href="/">
            <h1 className="font-sf-pixelate-bold text-white text-3xl cursor-pointer">
              {"<APTOLOG>"}
            </h1>
          </Link>
        </div>
        <div className="flex items-center px-9">
          <div style={{ paddingRight: "60px" }}>
            <div
              className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
                hoveredIcon === "Search"
                  ? "bg-white"
                  : "bg-black hover:bg-white"
              } 
                                border border-white rounded-none`}
              style={{ width: "40px", height: "40px" }}
              onMouseEnter={() => setHoveredIcon("Search")}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => handleIconClick("Search")}
            >
              <FontAwesomeIcon
                icon={faSearch}
                className={`${
                  hoveredIcon === "Search" ? "text-black" : "text-white"
                }`}
              />
            </div>
          </div>
          <div className="flex items-center">
            <Link legacyBehavior href="/login">
              <a className="font-sf-pixelate text-white cursor-pointer hover:text-gray-300 text-2xl">
                LOG_IN
              </a>
            </Link>
            <span className="font-sf-pixelate-bold text-white px-2 text-xl">
              \
            </span>
            <Link legacyBehavior href="/signup">
              <a className="font-sf-pixelate text-white cursor-pointer hover:text-gray-300 text-2xl">
                SIGN_UP
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
