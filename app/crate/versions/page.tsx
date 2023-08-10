"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";
import StaticBox from "@/components/statisticsBox";
import VersionCrate from "@/components/version";
import SimpleCrate from "@/components/sipleCrate";
import { useRouter } from "next/navigation";

export default function Home() {
  const [activeButton, setActiveButton] = useState("Sort Packages");
  const router = useRouter();

  const handleGoToReadme = () => {
    router.push("/crate/readme");
  };

  const handleGoToDependencies = () => {
    router.push("/crate/dependencies");
  };

  const handleGoToDependents = () => {
    router.push("/crate/dependents");
  };

  // Sample data for crates (can be replaced with data fetched from an API or database)
  const cratesData = [
    {
      size: "298 KB.",
      version: "Version 19.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 18.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 17.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 16.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 15.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 14.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 13.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 12.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 11.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 10.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 9.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 8.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 7.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 6.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 5.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 4.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 3.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 2.0",
      author: "@james moon",
      date: "5 days ago",
    },
    {
      size: "298 KB.",
      version: "Version 1.0",
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
          <div className="font-sf-pixelate-bold text-white flex flex-row items-center justify-center text-6xl uppercase mb-6 mt-20">
            random.sf
            <div className="font-sf-pixelate text-white text-xl uppercase mt-9 ml-4">
              V0.6.4
            </div>
          </div>
          <div className="font-sf-pixelate text-white text-2xl uppercase ">
            Core random number generator traits
          </div>
          <div className="font-sf-pixelate text-white text-2xl uppercase mb-9">
            and tools for implementation.
          </div>
          <div className="flex space-x-8 mb-20 justify-center">
            <button className="bg-[#1b1b1b] flex justify-center w-20 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
              #cli
            </button>
            <button className="bg-[#1b1b1b] flex justify-center w-20 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
              #web
            </button>
          </div>
        </div>
      </div>
      <div className="bg-grey text-white text-center py-10">
        <div className="w-full mx-auto ">
          <StaticBox
            downloadsLastWeek="858 882"
            packages="19"
            downloadsLastMonth="211 412 702"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-10 mb-20 mt-20">
        <button
          onClick={handleGoToReadme}
          className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black"
        >
          Readme
        </button>
        <button className="bg-[#1b1b1b] flex justify-center w-60 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
          Versions
        </button>
        <button
          onClick={handleGoToDependencies}
          className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black"
        >
          Dependencies
        </button>
        <button
          onClick={handleGoToDependents}
          className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black"
        >
          Dependents
        </button>
      </div>
      <div className="flex items-center justify-center mb-6 px-6">
        <div className="whitespace-nowrap text-2xl font-sans text-[#cccccc]">
          All 19 versions of rand_core since September 14th, 2017
        </div>
        <div className="justify-center pl-[325px] top-0 right-0 flex flex-row gap-6 items-center">
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
        <div className="flex flex-row gap-10 items-center">
          {/* First column */}
          <div className="flex flex-col gap-10 w-[610px]">
            {cratesData
              .slice(0, Math.ceil(cratesData.length / 2))
              .map((crate, index) => (
                <VersionCrate
                  key={index}
                  version={crate.version}
                  author={crate.author}
                  date={crate.date}
                  size={crate.size}
                />
              ))}
          </div>

          {/* Second column */}
          <div className="flex flex-col gap-10 w-[610px]">
            {cratesData
              .slice(Math.ceil(cratesData.length / 2))
              .map((crate, index) => (
                <VersionCrate
                  key={index}
                  version={crate.version}
                  author={crate.author}
                  date={crate.date}
                  size={crate.size}
                />
              ))}
            <SimpleCrate />
          </div>
        </div>
      </div>
      <div className="mb-20"></div>
      <Footer />
    </div>
  );
}
