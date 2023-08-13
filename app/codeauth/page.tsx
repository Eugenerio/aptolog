"use client";

import Link from "next/link";
import React, { useState } from "react";

const EnterCodeForNextStep: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGetCode = () => {
    // Handle get code logic here
  };

  return (
    <section className="bg-black w-full h-screen flex items-center justify-center">
      <article className="bg-black w-[580px] p-8 text-white rounded-lg">
        <h1 className="text-3xl mb-2 text-center uppercase font-sf-pixelate-bold">
          ENTER_CODE
        </h1>
        <p className="text-l mb-1 text-center uppercase font-sf-pixelate">
          THE CODE HAS BEEN SENT TO YOUR
        </p>
        <p className="text-l mb-9 text-center uppercase font-sf-pixelate">
          EMAIL TO RESET YOUR PASSWORD.
        </p>
        <section className="mb-1 mt-1">
          <input
            type="email"
            value={email}
            onChange={handleCodeChange}
            placeholder="CODE"
            className="font-sf-pixelate w-full p-4 mb-10 bg-transparent text-white border-white border rounded-none"
          />
        </section>
        <section className="flex justify-center">
          <button
            onClick={handleGetCode}
            className="px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6 hover:bg-white hover:text-black"
          >
            NEXT STEP
          </button>
        </section>
        <Link legacyBehavior href="/login">
          <span className="block text-center text-sm underline cursor-pointer mb-10 hover:text-gray-300">
            BACK TO LOG IN
          </span>
        </Link>
      </article>
    </section>
  );
};

export default EnterCodeForNextStep;
