"use client";

import PasswordInput from "@/components/passwordInput";
import { FaTwitter, FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import CheckPassword from "@/components/checkpassword";
import Link from "next/link";

const SingUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const isPasswordMatching = password === passwordCheck;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordCheck = () => {
    setShowPasswordCheck(!showPasswordCheck);
  };

  const handleSignup = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.ok) {
        // Handle successful signup, such as showing a success message
      } else {
        // Handle signup error, show an alert or error message
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username: email,
          password,
        }),
      }
    );

    let result = await response.json();

    alert(result.message);
  };

  const handleIconClick = (network: string) => {
    // Handle the click action for each network (Twitter, Wallet, GitHub)
    console.log(`Clicked on ${network}`);
  };

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <form
        className="bg-black w-[580px] p-8 text-white rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl mb-9 text-center uppercase font-sf-pixelate-bold">
          SIGN_UP
        </h1>
        <div className="mb-9 mt-1">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="EMAIL"
            className="font-sf-pixelate w-full p-4 bg-transparent text-white border-white border rounded-none"
          />
        </div>
        <PasswordInput
          value={password}
          showPassword={showPassword}
          onChange={handlePasswordChange}
          onToggleShowPassword={handleShowPassword}
        />
        <CheckPassword
          value={passwordCheck}
          showPasswordCheck={showPasswordCheck}
          onChange={handlePasswordCheckChange}
          onToggleShowPasswordCheck={handleShowPasswordCheck}
        />
        <div className="flex justify-center">
          {/* <Link legacyBehavior href="/login"> */}
          <button
            type="submit"
            onClick={handleSignup}
            className="px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6 hover:bg-white hover:text-black uppercase"
            disabled={!isPasswordMatching} // Disable the button when passwords don't match
          >
            Create Account
          </button>
          {/* </Link> */}
        </div>
        <Link legacyBehavior href="/login">
          <span className="block text-center text-sm underline cursor-pointer mb-10 hover:text-gray-300">
            I HAVE AN ACCOUNT
          </span>
        </Link>
        <div className="flex justify-center space-x-10">
          {/* Twitter Icon */}
          <div
            className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
              hoveredIcon === "Twitter"
                ? "bg-white"
                : "bg-[#1b1b1b] hover:bg-white"
            } border border-white`}
            style={{ width: "60px", height: "60px" }}
            onMouseEnter={() => setHoveredIcon("Twitter")}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleIconClick("Twitter")}
          >
            <FaTwitter
              className={`${
                hoveredIcon === "Twitter" ? "text-black" : "text-white"
              }`}
              size={24}
            />
          </div>

          {/* Martian Wallet Icon */}
          <div
            className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
              hoveredIcon === "Wallet"
                ? "bg-white"
                : "bg-[#1b1b1b] hover:bg-white"
            } border border-white`}
            style={{ width: "60px", height: "60px" }}
            onMouseEnter={() => setHoveredIcon("Wallet")}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleIconClick("Wallet")}
          >
            <img
              src="/martianwallet.svg" // Path to the SVG file in the public folder
              alt="Martian Wallet"
              className={`${hoveredIcon === "Wallet" ? "invert" : ""}`}
            />
          </div>

          {/* GitHub Icon */}
          <div
            className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
              hoveredIcon === "GitHub"
                ? "bg-white"
                : "bg-[#1b1b1b] hover:bg-white"
            } border border-white`}
            style={{ width: "60px", height: "60px" }}
            onMouseEnter={() => setHoveredIcon("GitHub")}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleIconClick("GitHub")}
          >
            <FaGithub
              className={`${
                hoveredIcon === "GitHub" ? "text-black" : "text-white"
              }`}
              size={24}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
