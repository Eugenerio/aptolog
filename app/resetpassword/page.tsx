"use client";

import Link from "next/link";
import React, { useState } from "react";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGetCode = () => {
    // Handle get code logic here
  };

  return (
    <main className="bg-black w-full h-screen flex items-center justify-center">
      <section className="bg-black w-[580px] p-8 text-white rounded-lg">
        <h1 className="text-3xl mb-2 text-center uppercase font-sf-pixelate-bold">
          RESET_PASSWORD
        </h1>
        <p className="text-l mb-9 text-center uppercase font-sf-pixelate">
          ENTER THE EMAIL ADDRESS TO SIGN IN.
        </p>
        <div className="mb-1 mt-1">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="EMAIL"
            className="font-sf-pixelate w-full p-4 mb-10 bg-transparent text-white border-white border rounded-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGetCode}
            className="px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6 hover:bg-white hover:text-black"
          >
            GET CODE
          </button>
        </div>
        <Link legacyBehavior href="/login">
          <a className="block text-center text-sm underline cursor-pointer mb-10 hover:text-gray-300">
            BACK TO LOG IN
          </a>
        </Link>
      </section>
    </main>
  );
};

export default ResetPassword;
