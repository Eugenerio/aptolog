"use client";

import PasswordInput from '@/components/passwordInput';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import React, { useState } from 'react';
import CheckPassword from '@/components/checkpassword';

const SingUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordcheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordCheck = () => {
    setShowPasswordCheck(!showPasswordCheck);
  }

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };

  const handleIconClick = (network: string) => {
    // Handle the click action for each network (Twitter, Wallet, GitHub)
    console.log(`Clicked on ${network}`);
  };

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <div className="bg-black w-[580px] p-8 text-white rounded-lg">
        <h1 className="text-5xl mb-9 text-center uppercase font-sf-pixelate-bold">Sign_UP</h1>
        <div className="mb-1 mt-1">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="EMAIL"
            className="font-sf-pixelate w-full p-4 bg-transparent text-white border-white border rounded-none"
          />
        </div>
        <span
          onClick={handleForgotPassword}
          className="cursor-pointer text-sm float-right block underline  mt-1 mb-10 hover:text-gray-300 "
        >
          FORGOT PASSWORD?
        </span>
        <PasswordInput
          value={password}
          showPassword={showPassword}
          onChange={handlePasswordChange}
          onToggleShowPassword={handleShowPassword}
        />
        <CheckPassword
          value={passwordcheck}
          showPasswordCheck={showPasswordCheck}
          onChange={handlePasswordCheckChange}
          onToggleShowPasswordCheck={handleShowPasswordCheck}
        />
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6  hover:bg-white hover:text-black uppercase"
          >
            To my account
          </button>
        </div>
        <span className="block text-center text-sm underline cursor-pointer mb-10 hover:text-gray-300">
          CREATE AN ACCOUNT
        </span>
        <div className="flex justify-center space-x-10">
          
          {/* Twitter Icon */}
          <div
            className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
              hoveredIcon === 'Twitter' ? 'bg-white' : 'bg-[#1b1b1b] hover:bg-white'
            } border border-white`}
            style={{ width: '60px', height: '60px' }}
            onMouseEnter={() => setHoveredIcon('Twitter')}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleIconClick('Twitter')}
          >
            <FaTwitter
              className={`${hoveredIcon === 'Twitter' ? 'text-black' : 'text-white'}`}
              size={24}
            />
          </div>
          
          {/* Martian Wallet Icon */}
          <div
            className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
              hoveredIcon === 'Wallet' ? 'bg-white' : 'bg-[#1b1b1b] hover:bg-white'
            } border border-white`}
            style={{ width: '60px', height: '60px' }}
            onMouseEnter={() => setHoveredIcon('Wallet')}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleIconClick('Wallet')}
          >
            <img
              src="/martianwallet.svg"  // Path to the SVG file in the public folder
              alt="Martian Wallet"
              className={`${hoveredIcon === 'Wallet' ? 'invert' : ''}`}
            />
          </div>
          
          {/* GitHub Icon */}
          <div
            className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
              hoveredIcon === 'GitHub' ? 'bg-white' : 'bg-[#1b1b1b] hover:bg-white'
            } border border-white`}
            style={{ width: '60px', height: '60px' }}
            onMouseEnter={() => setHoveredIcon('GitHub')}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleIconClick('GitHub')}
          >
            <FaGithub
              className={`${hoveredIcon === 'GitHub' ? 'text-black' : 'text-white'}`}
              size={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
