"use client";

import PasswordInput from "@/components/passwordInput";
import { FaTwitter, FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const { setAccessToken } = useAuth();
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleIconClick = (network: string) => {
    console.log(`Clicked on ${network}`);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "password",
          username: email,
          password,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      setAccessToken(data.token);
      router.push("/");
    } else {
      const errorData = await response.json();
      alert(errorData.detail);
    }
  };

  const handleSocialIconMouseEnter = (icon: string) => {
    setHoveredIcon(icon);
  };

  const handleSocialIconMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <main className="bg-black w-full h-screen flex items-center justify-center">
      <form
        className="bg-black w-[580px] h-[574px] p-8 text-white rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl mb-9 text-center uppercase font-sf-pixelate-bold">
          LOG_IN
        </h1>
        <section className="mb-9 mt-1">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="EMAIL"
            className="font-sf-pixelate w-full p-4 bg-transparent text-white border-white border rounded-none"
          />
          <Link legacyBehavior href="/resetpassword">
            <span className="block mt-2 text-right text-sm underline cursor-pointer mb-10 hover:text-gray-300">
              FORGOT PASSWORD?
            </span>
          </Link>
        </section>
        <PasswordInput
          value={password}
          showPassword={showPassword}
          onChange={handlePasswordChange}
          onToggleShowPassword={handleShowPassword}
        />
        <section className="flex justify-center">
          <button
            type="submit"
            className="px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6 hover:bg-white hover:text-black uppercase"
          >
            To my account
          </button>
        </section>
        <Link legacyBehavior href="/signup">
          <span className="block text-center text-sm underline cursor-pointer mb-10 hover:text-gray-300">
            CREATE AN ACCOUNT
          </span>
        </Link>
        <section className="flex justify-center space-x-10">
          {["Twitter", "Wallet", "GitHub"].map((network) => (
            <button
              key={network}
              className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
                hoveredIcon === network
                  ? "bg-white"
                  : "bg-[#1b1b1b] hover:bg-white"
              } border border-white`}
              style={{ width: "60px", height: "60px" }}
              onMouseEnter={() => handleSocialIconMouseEnter(network)}
              onMouseLeave={handleSocialIconMouseLeave}
              onClick={() => handleIconClick(network)}
            >
              {network === "Twitter" && (
                <FaTwitter
                  className={
                    hoveredIcon === network ? "text-black" : "text-white"
                  }
                  size={24}
                />
              )}
              {network === "Wallet" && (
                <Image
                  src="/martianwallet.svg"
                  alt="Martian Wallet"
                  className={`${hoveredIcon === network ? "invert" : ""}`}
                  width={28}
                  height={28}
                />
              )}
              {network === "GitHub" && (
                <FaGithub
                  className={
                    hoveredIcon === network ? "text-black" : "text-white"
                  }
                  size={24}
                />
              )}
            </button>
          ))}
        </section>
      </form>
    </main>
  );
};

export default LoginPage;
