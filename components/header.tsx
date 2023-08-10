import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth"; // Import the AuthContext hook
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const { isAuthenticated, logout } = useAuth(); // Use the useAuth hook

  const router = useRouter();

  const handleIconClick = () => {
    router.push("/search");
  };

  const handleUserMenuClick = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  const handleLogoutClick = () => {
    logout();
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
              onClick={() => handleIconClick()}
            >
              <FontAwesomeIcon
                icon={faSearch}
                className={`${
                  hoveredIcon === "Search" ? "text-black" : "text-white"
                }`}
              />
            </div>
          </div>
          <div className="flex items-center relative group">
            {isAuthenticated ? (
              <div>
                <div
                  className={`p-2 cursor-pointer flex items-center justify-center transition-colors bg-black hover:bg-white border border-white rounded${
                    hoveredIcon === "User"
                      ? "bg-white"
                      : "bg-black hover:bg-white"
                  } border border-white rounded-none`}
                  onClick={handleUserMenuClick}
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={`text-white text-sm mr-1 ${
                        userMenuVisible ? "rotate-180" : ""
                      }`}
                    />
                    <FontAwesomeIcon
                      icon={faUser}
                      className={`text-white text-2xl ${
                        hoveredIcon === "User" ? "text-black" : "" // Apply black text color on icon hover
                      }`}
                    />
                  </div>
                </div>
                {userMenuVisible && (
                  <div className="absolute right-0 mt-2 w-12 h-48 bg-[#1b1b1b] flex flex-col justify-between items-center py-6">
                    <div className="flex flex-col items-center">
                      <Link legacyBehavior href="/history">
                        <Image
                          src="https://file.rendit.io/n/KvrmHzqWmRJnZHMIgMBx.svg"
                          alt="Menu Icon 1"
                          width={24}
                          height={24}
                          className="mb-9 cursor-pointer"
                        />
                      </Link>
                      <Link legacyBehavior href="/settings/profile">
                        <Image
                          src="https://file.rendit.io/n/MeKxCXdJB8OOfEzvIm7G.svg"
                          alt="Menu Icon 2"
                          width={24}
                          height={24}
                          className="mb-9 cursor-pointer"
                        />
                      </Link>
                      <Image
                        src="https://file.rendit.io/n/A0jJnOqiTvNJEbYM8h1t.svg"
                        alt="Menu Icon 3"
                        width={24}
                        height={24}
                        onClick={handleLogoutClick}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
