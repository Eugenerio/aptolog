"use client";

import PasswordInput from "@/components/NewpasswordInput";
import React, { useState } from "react";

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleBackToLogin = () => {
    // handle back to login
  };

  const handleGetCode = () => {
    // Handle get code logic here
  };

  return (
    <section className="bg-black w-full h-screen flex items-center justify-center">
      <article className="bg-black w-[580px] p-8 text-white rounded-lg">
        <h1 className="text-3xl mb-2 text-center uppercase font-sf-pixelate-bold">
          NEW_PASSWORD
        </h1>
        <p className="text-l mt-4 mb-9 text-center uppercase font-sf-pixelate">
          CREATE YOUR NEW PASSWORD!
        </p>
        <PasswordInput
          value={password}
          showPassword={showPassword}
          onChange={handlePasswordChange}
          onToggleShowPassword={handleShowPassword}
        />
        <div className="flex justify-center">
          <button
            onClick={handleGetCode}
            className="px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6 hover:bg-white hover:text-black"
          >
            NEXT STEP
          </button>
        </div>
        <span
          onClick={handleBackToLogin}
          className="block text-center text-sm underline cursor-pointer mb-10 hover:text-gray-300"
        >
          BACK TO LOG IN
        </span>
      </article>
    </section>
  );
};

export default NewPassword;
