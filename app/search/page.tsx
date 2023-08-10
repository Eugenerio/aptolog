"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";
import StaticBox from "@/components/statisticsBox";
import Crate from "@/components/crate";
import Image from "next/image";
import SearchBar from "@/components/searchbar";

export default function History() {
  const [search, setSearch] = useState("");
  const [activeButton, setActiveButton] = useState("Sort Packages");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    // TODO
  };

  const handleDelete = () => {
    // Handle delete logic here
  };

  // Sample data for crates (can be replaced with data fetched from an API or database)
  const cratesData = [
    {
      name: "move.toml",
      description: "TypeScript plugin for ESLint",
      version: "v.2.4",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      name: "move.toml",
      description: "TypeScript plugin for ESLint",
      version: "v.2.4",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      name: "move.toml",
      description: "TypeScript plugin for ESLint",
      version: "v.2.4",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      name: "move.toml",
      description: "TypeScript plugin for ESLint",
      version: "v.2.4",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      name: "move.toml",
      description: "TypeScript plugin for ESLint",
      version: "v.2.4",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      name: "move.toml",
      description: "TypeScript plugin for ESLint",
      version: "v.2.4",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      name: "move.toml",
      description: "TypeScript plugin for ESLint",
      version: "v.2.4",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      name: "move.toml",
      description: "TypeScript plugin for ESLint",
      version: "v.2.4",
      author: "@james moon",
      date: "5 days ago",
    },

    // ... (more crates)
  ];

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=" flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mt-[125px]">
            <SearchBar
              value={search}
              onChange={handleSearchChange}
              handleSearchButton={handleSearch}
            />
          </div>
          <div className="flex space-x-8 mb-20">
            <button className="bg-[#1b1b1b] flex flex-col justify-center w-80 h-16 items-center text-white text-xl cursor-pointer hover:bg-white hover:text-black">
              Search results for &ldquo;absolut&rdquo;
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center mb-6 px-6">
          <div className="whitespace-nowrap text-2xl font-sans text-[#cccccc]">
            584 packages found
          </div>
          <div className="justify-center pl-[600px] top-0 right-0 flex flex-row gap-6 items-center">
            <button
              className={`${
                activeButton === "Sort Packages"
                  ? "bg-[#1b1b1b] border border-white"
                  : "bg-black"
              } flex flex-col justify-center w-full text-xl h-10 items-center text-white cursor-pointer hover:bg-white hover:text-black`}
              onClick={() => setActiveButton("Sort Packages")}
              style={{ whiteSpace: "nowrap" }}
            >
              Sort Packages
            </button>
            <button
              className={`${
                activeButton === "Maintenance"
                  ? "bg-[#1b1b1b] border border-white"
                  : "bg-black"
              } flex flex-col justify-center w-full h-10 text-xl items-center text-white cursor-pointer hover:bg-white hover:text-black`}
              onClick={() => setActiveButton("Maintenance")}
            >
              Maintenance
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-10 w-[1116px]">
            {cratesData.map((crate, index) => (
              <Crate
                key={index}
                name={crate.name}
                description={crate.description}
                version={crate.version}
                author={crate.author}
                date={crate.date}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center pb-20 mt-12 px-6 whitespace-nowrap text-xl font-sans text-[#cccccc]">
          1-10 from 584
          <div className="justify-center pl-[700px] top-0 right-0 flex flex-row gap-6 items-center">
            <Image
              height={50}
              width={50}
              src="https://file.rendit.io/n/sOX8kY1IcBh1yXdImiwM.svg"
              className="min-h-0 min-w-0 mr-0 w-3 shrink-0 cursor-pointer"
              alt="prev"
            />
            <a
              href="#"
              className="text-xl font-sans font-medium leading-[24px] text-[#cccccc] mr-0 w-3 shrink-0 hover:text-white transition-colors duration-300"
            >
              1
            </a>
            <a
              href="#"
              className="text-xl font-sans leading-[24px] text-[#cccccc] w-3 shrink-0 hover:text-white transition-colors duration-300"
            >
              2
            </a>
            <a
              href="#"
              className="text-xl font-sans leading-[24px] text-[#cccccc] w-3 shrink-0 hover:text-white transition-colors duration-300"
            >
              3
            </a>
            <a
              href="#"
              className="text-xl font-sans leading-[24px] text-[#cccccc] w-3 shrink-0 hover:text-white transition-colors duration-300"
            >
              4
            </a>
            <a
              href="#"
              className="text-xl font-sans leading-[24px] text-[#cccccc] w-3 shrink-0 hover:text-white transition-colors duration-300"
            >
              ...
            </a>
            <a
              href="#"
              className="text-xl font-sans leading-[24px] text-[#cccccc] w-3 shrink-0 hover:text-white transition-colors duration-300"
            >
              23
            </a>
            <Image
              height={50}
              width={50}
              src="https://file.rendit.io/n/ydgZjfQTePlA8ipkUurP.svg"
              className="min-h-0 min-w-0 mr-0 w-3 shrink-0 cursor-pointer"
              alt="next"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
