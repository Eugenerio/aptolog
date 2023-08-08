"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";
import StaticBox from "@/components/statisticsBox";
import VersionCrate from "@/components/version";
import SimpleCrate from "@/components/sipleCrate";
import Crate from "@/components/crate";
import Image from "next/image";

export default function Home() {
  const [activeButton, setActiveButton] = useState("Sort Packages");
  // Sample data for crates (can be replaced with data fetched from an API or database)
  const cratesData = [
    {
      name: "getrandom",
      description:
        "A Rust library for retrieving random data from (operating) system sources. It is assumed that the system always provides high-quality cryptographically secure random data, ideally backed by hardware entropy sources. This crate derives its name from Linux's getrandom function, but i",
      version: "0.2.10",
      date: "2 month ago",
    },
    {
      name: "getrandom",
      description:
        "A Rust library for retrieving random data from (operating) system sources. It is assumed that the system always provides high-quality cryptographically secure random data, ideally backed by hardware entropy sources. This crate derives its name from Linux's getrandom function, but i",
      version: "0.2.10",
      date: "2 month ago",
    },
    {
      name: "getrandom",
      description:
        "A Rust library for retrieving random data from (operating) system sources. It is assumed that the system always provides high-quality cryptographically secure random data, ideally backed by hardware entropy sources. This crate derives its name from Linux's getrandom function, but i",
      version: "0.2.10",
      date: "2 month ago",
    },
    {
      name: "getrandom",
      description:
        "A Rust library for retrieving random data from (operating) system sources. It is assumed that the system always provides high-quality cryptographically secure random data, ideally backed by hardware entropy sources. This crate derives its name from Linux's getrandom function, but i",
      version: "0.2.10",
      date: "2 month ago",
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
        <button className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black">
          Readme
        </button>
        <button className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black">
          Versions
        </button>
        <button className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black">
          Dependencies
        </button>
        <button className="bg-[#1b1b1b] flex justify-center w-60 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
          Dependents
        </button>
      </div>
      <div className="flex items-center justify-center mb-6 px-6">
        <div className="whitespace-nowrap text-2xl font-sans text-[#cccccc]">
          All 4 dependents of rand_core since September 14th, 2017
        </div>
        <div className="justify-center pl-[200px] top-0 right-0 flex flex-row gap-6 items-center">
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
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-10 w-[1116px]">
            {cratesData.map((crate, index) => (
              <Crate
                key={index}
                name={crate.name}
                description={crate.description}
                version={crate.version}
                date={crate.date}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-20"></div>
      <Footer />
    </div>
  );
}
