"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";
import StaticBox from "@/components/statisticsBox";
import Card from "@/components/card";
import Crate from "@/components/crate";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGetStarted = () => {
    // handle get stardet button logic
  };

  const handleSubscribe = () => {
    // Handle login logic here
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
          <div className="font-sf-pixelate text-white text-4xl uppercase mb-2 mt-20">
            Create the
          </div>
          <div className="font-sf-pixelate text-white text-4xl uppercase mb-2">
            extraordinary -
          </div>
          <div className="font-sf-pixelate text-white text-4xl uppercase mb-2">
            bring your dreams
          </div>
          <div className="font-sf-pixelate text-white text-4xl uppercase mb-12">
            to life!
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleGetStarted}
              className="px-7 py-3 bg-[#1b1b1b] border border-white text-white  rounded-none cursor-pointer mb-9 hover:bg-white hover:text-black"
            >
              GET STARTED
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
      <div className="flex items-center justify-center text-white">
        <div className="text-center">
          <div className="font-sf-pixelate-bold text-white text-4xl uppercase mb-10 pt-20">
            about aptos
          </div>
          <div className="max-w-[780px] mx-5 text-2xl">
            <div className="self-stretch relative font-roboto text-[inherit]">
              <p className="mb-4">
                {`Welcome! Aptos is a Layer 1 for everyone. In the `}
                <a
                  className="text-[inherit]"
                  href="https://en.wikipedia.org/wiki/Ohlone_languages"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    Ohlone language
                  </span>
                </a>
                {`, `}
                <a
                  className="text-[inherit]"
                  href="https://en.wikipedia.org/wiki/Aptos,_California"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">{"Aptos"}</span>
                </a>
                {` means "The People." This site is here to help you grow a `}
                <a
                  className="text-[inherit]"
                  href="https://github.com/aptos-foundation/ecosystem-projects"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    web3 ecosystem project
                  </span>
                </a>{" "}
                that benefits the entire world through easier development, more
                reliable services, faster transactions, and a supportive,
                decentralized family.
              </p>
              <p className="m-0">
                This documentation will help you develop applications for the
                Aptos blockchain, run nodes, and be a part of the blossoming
                Aptos community. This documentation covers both basic and
                advanced topics. Here you will find concepts, how-to guides,
                quickstarts, tutorials, API references, code examples, release
                notes, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-white pt-20">
        <div className="text-center">
          <div className="font-sf-pixelate-bold text-white text-3xl uppercase mb-10 mt-20">
            4 reasons to choose aptos
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <Card
          title="SCALIABILITY"
          description="Aptos data model enables flexible key management and hybrid custodial options."
        />
        <Card
          title="SAFETY"
          description="Aptos blockchain natively integrates and internally uses the Move language for fast and secure transaction execution"
        />
        <Card
          title="HIGH THROUGHPUT"
          description="The Aptos blockchain leverages a pipelined and modular approach for the key stages of transaction processing."
        />
        <Card
          title="ATOMICITY SUPPORT"
          description="Aptos can efficiently support atomicity with arbitrarily complex transactions"
        />
      </div>
      <div className="flex items-center justify-center text-white pt-20">
        <div className="text-center">
          <div className="font-sf-pixelate-bold text-white text-3xl uppercase mb-20 mt-20">
            Recently_updated_packages
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
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
      <div className="flex justify-center items-center pt-20">
        <div className="overflow-hidden bg-[#1b1b1b] flex flex-col gap-6 w-[640px] h-[585px] items-center py-8">
          {/* Image */}
          <Image
            width={25}
            height={25}
            src="https://file.rendit.io/n/WSyO4Soluv2PHX3yCLpA.svg"
            className="min-w-0 w-24 "
            alt="Subscribe Icon"
          />
          <div className="text-2xl text-center font-['SF_Pixelate'] uppercase text-[#fafafa] w-full">
            SUBSCRIBE_TO_BE_IN_TOUCH
          </div>
          <div className="text-center text-xl font-sans text-[#fafafa] mb-4 w-3/4">
            This subscription will be useful for you if you want to stay up to
            date with the news
          </div>
          <div className="mb-1 mt-1">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="EMAIL"
              className="font-sf-pixelate w-full p-4 bg-transparent text-white border-white border rounded-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubscribe}
              className="px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6 mt-4 hover:bg-white hover:text-black uppercase"
            >
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-grow"></div>
      <Footer />
    </div>
  );
}
