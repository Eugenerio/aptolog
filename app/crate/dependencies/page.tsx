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
import { useRouter } from "next/navigation";

export default function Home() {
  const [activeButton, setActiveButton] = useState("Sort Packages");
  const router = useRouter();

  const handleGoToVersions = () => {
    router.push("/crate/versions");
  };

  const handleGoToDependents = () => {
    router.push("/crate/dependents");
  };

  const handleGoToReadme = () => {
    router.push("/crate/readme");
  };
  // Sample data for crates (can be replaced with data fetched from an API or database)
  const cratesData = [
    {
      name: "compiler_builtins",
      description:
        "A macro to ergonomically define an item depending on a large number of #[cfg] parameters. Structured like an if-else chain, the first matching branch is the item that gets emitted.",
      version: "v.1.19",
      date: "2 month ago",
    },
    {
      name: "wasi",
      description:
        "wasi provides all of the definitions necessary to easily interoperate with C code (or C-like code) on each of the platforms that Rust supports. This includes type definitions",
      version: "v.1.19",
      date: "2 month ago",
    },
    {
      name: "js-sys",
      description:
        "Bindings for all JS global objects and functions in all JS environments like Node.js and browsers, built on `#[wasm_bindgen]` using the `wasm-bindgen` crate.",
      version: "v.2.4",
      date: "2 month ago",
    },
    {
      name: "wasm-bindgen-test",
      description:
        "This is the runtime support needed to execute tests. This is basically the same thing as the test product in the repository, and one day it will likely use the test crate itself! For now though it's a minimal reimplementation that provides the support for:",
      version: "v.1.19",
      date: "2 month ago",
    },
    {
      name: "compiler_builtins",
      description:
        "A macro to ergonomically define an item depending on a large number of #[cfg] parameters. Structured like an if-else chain, the first matching branch is the item that gets emitted.",
      version: "v.1.19",
      date: "2 month ago",
    },
    {
      name: "wasi",
      description:
        "wasi provides all of the definitions necessary to easily interoperate with C code (or C-like code) on each of the platforms that Rust supports. This includes type definitions",
      version: "v.1.19",
      date: "2 month ago",
    },
    {
      name: "js-sys",
      description:
        "Bindings for all JS global objects and functions in all JS environments like Node.js and browsers, built on `#[wasm_bindgen]` using the `wasm-bindgen` crate.",
      version: "v.2.4",
      date: "2 month ago",
    },
    {
      name: "wasm-bindgen-test",
      description:
        "This is the runtime support needed to execute tests. This is basically the same thing as the test product in the repository, and one day it will likely use the test crate itself! For now though it's a minimal reimplementation that provides the support for:",
      version: "v.1.19",
      date: "2 month ago",
    },
    {
      name: "compiler_builtins",
      description:
        "A macro to ergonomically define an item depending on a large number of #[cfg] parameters. Structured like an if-else chain, the first matching branch is the item that gets emitted.",
      version: "v.1.19",
      date: "2 month ago",
    },
    {
      name: "wasi",
      description:
        "wasi provides all of the definitions necessary to easily interoperate with C code (or C-like code) on each of the platforms that Rust supports. This includes type definitions",
      version: "v.1.19",
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
        <button
          onClick={handleGoToReadme}
          className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black"
        >
          Readme
        </button>
        <button
          onClick={handleGoToVersions}
          className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black"
        >
          Versions
        </button>
        <button className="bg-[#1b1b1b] flex justify-center w-60 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
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
          All 20 dependencies of rand_core since September 14th, 2017
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
      <div className="flex items-center justify-center pb-20 mt-12 px-6 whitespace-nowrap text-xl font-sans text-[#cccccc]">
        1-10 from 20
        <div className="justify-center pl-[850px] top-0 right-0 flex flex-row gap-6 items-center">
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
          <Image
            height={50}
            width={50}
            src="https://file.rendit.io/n/ydgZjfQTePlA8ipkUurP.svg"
            className="min-h-0 min-w-0 mr-0 w-3 shrink-0 cursor-pointer"
            alt="next"
          />
        </div>
      </div>
      <div className="mb-20"></div>
      <Footer />
    </div>
  );
}
