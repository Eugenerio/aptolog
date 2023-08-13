"use client";

import { FaTwitter, FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import CheckPassword from "@/components/checkpassword";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import PasswordInputSignUp from "@/components/passwordImputSignup";

const SingUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const isSaveEnabled =
    password === passwordCheck && passwordCheck.trim() !== "";

  const { setAccessToken } = useAuth();
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordCheck":
        setPasswordCheck(value);
        break;
      default:
        break;
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordCheck = () => {
    setShowPasswordCheck(!showPasswordCheck);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(
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

      const result = await response.json();

      if (response.ok) {
        // Handle successful signup, such as showing a success message
        setAccessToken(result.token);
        router.push("/");
      } else {
        // Handle signup error, show an alert or error message
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleIconClick = (network: string) => {
    // Handle the click action for each network (Twitter, Wallet, GitHub)
    console.log(`Clicked on ${network}`);
  };

  return (
    <main className="bg-black w-full h-screen flex items-center justify-center">
      <form
        className="bg-black w-[580px] p-8 text-white rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl mb-9 text-center uppercase font-sf-pixelate-bold">
          SIGN_UP
        </h1>
        <section className=" mb-9 mt-1">
          <input
            type="email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="EMAIL"
            className="font-sf-pixelate w-full p-4 bg-transparent text-white border-white border rounded-none"
          />
          <Link legacyBehavior href="/codesignup">
            <span className="block mt-2 text-right text-sm underline cursor-pointer mb-10 hover:text-gray-300">
              FORGOT PASSWORD?
            </span>
          </Link>
        </section>
        <section className="mt-9">
          <PasswordInputSignUp
            value={password}
            showPassword={showPassword}
            onChange={(e) => handleInputChange("password", e.target.value)}
            onToggleShowPassword={handleShowPassword}
          />
        </section>
        <CheckPassword
          value={passwordCheck}
          showPasswordCheck={showPasswordCheck}
          onChange={(e) => handleInputChange("passwordCheck", e.target.value)}
          onToggleShowPasswordCheck={handleShowPasswordCheck}
        />
        <section className="flex justify-center">
          <button
            type="submit"
            className={`px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6 hover:bg-white hover:text-black uppercase ${
              isSaveEnabled ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isSaveEnabled}
          >
            Create Account
          </button>
        </section>
        <Link legacyBehavior href="/login">
          <p className="block text-center text-sm underline cursor-pointer mb-10 hover:text-gray-300">
            I HAVE AN ACCOUNT
          </p>
        </Link>
        <section className="flex justify-center space-x-10">
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
            <Image
              src="/martianwallet.svg"
              alt="Martian Wallet"
              className={`${hoveredIcon === "Wallet" ? "invert" : ""}`}
              width={28}
              height={28}
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
        </section>
      </form>
    </main>
  );
};

export default SingUp;
