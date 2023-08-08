"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";
import StaticBox from "@/components/statisticsBox";
import Documentation from "@/components/readme";

export default function Home() {
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
              V1.0
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
        <button className="bg-[#1b1b1b] flex justify-center w-60 h-10 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
          Readme
        </button>
        <button className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black">
          Versions
        </button>
        <button className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black">
          Dependencies
        </button>
        <button className="bg-[#131313] flex justify-center w-60 h-10 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black">
          Dependents
        </button>
      </div>
      <div className="flex justify-center mb-20 mt-20">
        <div className="text-xl font-sans leading-[30px] text-[#cccccc] w-full">
          Packages allow Move programmers to more easily re-use code and share
          it across projects. The Move package system allows programmers to
          easily:
          <br />
          <div className="contents">
            Define a package containing Move code;
            <br />
            Parameterize a package by{" "}
          </div>
          <div className="underline contents">named addresses</div>
          <div className="contents">
            ;<br />
            Import and use packages in other Move code and instantiate named
            addresses;
            <br />
            Build packages and generate associated compilation artifacts from
            packages; and
            <br />
            Work with a common interface around compiled Move artifacts.
          </div>
        </div>
      </div>
      <div className="flex flex-grow"></div>
      <Footer />
    </div>
  );
}
