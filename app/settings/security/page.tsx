"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";
import SecurityPasswordInput from "@/components/securityOldPasswordInput";
import SecurityPasswordSetInput from "@/components/securitySetNewPassword";
import SecurityPasswordCheckInput from "@/components/securityCheckNewPassword";

export default function Home() {
  const [newpasswordcheck, setNewPasswordCheck] = useState("");
  const [newpasswordset, setNewPasswordSet] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleNewPasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPasswordCheck(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordSetChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPasswordSet(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isSaveEnabled =
    newpasswordset === newpasswordcheck && newpasswordset.trim() !== "";

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-center space-x-10 mb-20 mt-20 pr-96">
        <button className="bg-[#131313] flex justify-center text-2xl w-60 h-16 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black">
          Profile
        </button>
        <button className="bg-[#1b1b1b] flex justify-center text-2xl w-60 h-16 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
          Security
        </button>
      </div>
      <div className="flex justify-center space-x-10  mt-20 mb-4">
        <SecurityPasswordInput
          value={oldpassword}
          showPassword={showPassword}
          onChange={handlePasswordChange}
          onToggleShowPassword={handleShowPassword}
        />
      </div>
      <div className="flex justify-center space-x-10 ">
        <SecurityPasswordSetInput
          value={newpasswordset}
          showPassword={showPassword}
          onChange={handleNewPasswordSetChange}
          onToggleShowPassword={handleShowPassword}
        />
      </div>
      <div className="flex justify-center space-x-10 mb-4">
        <SecurityPasswordCheckInput
          value={newpasswordcheck}
          showPassword={showPassword}
          onChange={handleNewPasswordCheckChange}
          onToggleShowPassword={handleShowPassword}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleLogin}
          className={`px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6 hover:bg-white hover:text-black uppercase ${
            isSaveEnabled ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isSaveEnabled}
        >
          save changes
        </button>
      </div>
      <span className="block text-center text-sm underline cursor-pointer mb-10 text-gray-300 hover:text-white">
        CREATE AN ACCOUNT
      </span>
      <div className="flex flex-grow"></div>
      <Footer />
    </div>
  );
}
