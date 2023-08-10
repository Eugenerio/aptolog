"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";
import StaticBox from "@/components/statisticsBox";
import Crate from "@/components/crate";
import SearchBar from "@/components/searchbar";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    // TODO
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
          <div className="font-sf-pixelate text-white text-5xl uppercase mb-9 mt-20">
            looking_for_the_incredible
          </div>
          <div className="font-sf-pixelate text-white text-xl uppercase ">
            Instantly publish your packs and install them. Become
          </div>
          <div className="font-sf-pixelate text-white text-xl uppercase pb-12">
            a contributor andenhance the site with your work.
          </div>
          <div className="flex justify-center">
            <SearchBar
              value={search}
              onChange={handleSearchChange}
              handleSearchButton={handleSearch}
            />
          </div>
          <div className="flex space-x-8 mb-20 ">
            <button className="ml-9 bg-[#1b1b1b] flex justify-center w-20 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
              #cli
            </button>
            <button className="bg-[#1b1b1b] flex justify-center w-20 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
              #web
            </button>
            <button className="bg-[#1b1b1b] flex justify-center w-20 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
              #paser
            </button>
            <button className="bg-[#1b1b1b] flex justify-center w-20 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
              #crypto
            </button>
            <button className="bg-[#1b1b1b] flex justify-center w-20 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
              #wasm
            </button>
            <button className="bg-[#1b1b1b] flex justify-center w-20 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
              #ffi
            </button>
          </div>
        </div>
      </div>
      <div className="bg-grey text-white text-center py-10">
        <div className="w-full mx-auto ">
          <StaticBox
            downloadsLastWeek="52 501 858 882"
            packages="2 477 329"
            downloadsLastMonth="220 587 928 792"
          />
        </div>
      </div>
      <div className="flex flex-col pt-20 pb-20 gap-6 w-full h-[342px] items-center px-32">
        <div className="text-2xl font-['SF_Pixelate'] uppercase text-[#fafafa] mb-5 w-[286px]">
          popular_Categories
        </div>
        <div className="self-stretch flex flex-row justify-center items-center mx-5 gap-8">
          <button className="bg-[#1b1b1b] hover:bg-white text-2xl text-white hover:text-black flex flex-col justify-center h-16 px-4 ">
            Development tools
          </button>
          <button className="bg-[#1b1b1b] hover:bg-white text-2xl text-white hover:text-black flex flex-col justify-center h-16 px-4 ">
            No standard library
          </button>
          <button className="bg-[#1b1b1b] hover:bg-white text-2xl text-white hover:text-black flex flex-col justify-center h-16 px-4 ">
            No standard library
          </button>
        </div>
        <div className="self-stretch flex flex-row justify-center items-center gap-8">
          <button className="bg-[#1b1b1b] hover:bg-white text-2xl text-white hover:text-black flex flex-col justify-center h-16 px-4 ">
            Command line utilities
          </button>
          <button className="bg-[#1b1b1b] hover:bg-white text-2xl text-white hover:text-black flex flex-col justify-center h-16 px-4 ">
            Data structures
          </button>
          <button className="bg-[#1b1b1b] hover:bg-white text-2xl text-white hover:text-black flex flex-col justify-center h-16 px-4 ">
            Network programming
          </button>
        </div>
        <div className="flex flex-row justify-center items-center w-full gap-8">
          <button className="bg-[#1b1b1b] hover:bg-white text-2xl text-white hover:text-black flex flex-col justify-center h-16 px-4 ">
            Web programming
          </button>
          <button className="bg-[#1b1b1b] hover:bg-white text-2xl text-white hover:text-black flex flex-col justify-center h-16 px-4 ">
            Asynchronous
          </button>
          <button className="bg-[#1b1b1b] hover:bg-white text-2xl text-white hover:text-black flex flex-col justify-center h-16 px-4 ">
            Cryptography
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center text-white pt-[200px]">
        <div className="text-center">
          <div className="font-sf-pixelate-bold text-white text-3xl uppercase mb-20 mt-20">
            Recently_updated_packages
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-20">
        <div className="flex flex-row gap-10 items-center">
          {/* First column */}
          <div className="flex flex-col gap-10 w-[610px]">
            {cratesData
              .slice(0, Math.ceil(cratesData.length / 2))
              .map((crate, index) => (
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

          {/* Second column */}
          <div className="flex flex-col gap-10 w-[610px]">
            {cratesData
              .slice(Math.ceil(cratesData.length / 2))
              .map((crate, index) => (
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
      </div>
      <div className="flex flex-grow"></div>
      <Footer />
    </div>
  );
}
