"use client";

import { FaTwitter, FaGithub } from 'react-icons/fa';
import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    const handleIconClick = (network: string) => {
        // Handle the click action for each network (Twitter, Wallet, GitHub)
        console.log(`Clicked on ${network}`);
    };


  return (
    <footer className=" bg-[#1b1b1b] py-14 flex-shrink-0 mt-20">
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-16">

            {/* First Column */}
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="font-sf-pixelate-bold text-2xl uppercase text-white">support</div>
                    <div className="flex flex-col items-center justify-start gap-6 text-xl font-roboto text-gray-300">
                    <div className="uppercase">Help</div>
                    <div className="uppercase">Advisories</div>
                    <div className="uppercase">status</div>
                    <div className="uppercase">contact</div>
                </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center justify-center gap-10 pb-20">
                <div className="font-sf-pixelate-bold text-2xl uppercase text-white">TERMS_AND_POLICIES</div>
                    <div className="flex flex-col items-center justify-start gap-6 text-xl font-roboto text-gray-300">
                    <div className="uppercase">about</div>
                    <div className="uppercase">blog</div>
                </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="font-sf-pixelate-bold text-2xl uppercase text-white">COMPANY</div>
                    <div className="flex flex-col items-center justify-start gap-6 text-xl font-roboto text-gray-300">
                        <div className="uppercase">Policies</div>
                        <div className="uppercase">Code of Conduct</div>
                        <div className="uppercase">Privacy</div>
                        <div className="uppercase">Terms of Use</div>
                    </div>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-10 pt-20">
                    {/* Twitter Icon */}
                    <div
                        className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
                            hoveredIcon === 'Twitter' ? 'bg-white' : 'bg-black hover:bg-white'
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
                            hoveredIcon === 'Wallet' ? 'bg-white' : 'bg-black hover:bg-white'
                        } border border-white`}
                        style={{ width: '60px', height: '60px' }}
                        onMouseEnter={() => setHoveredIcon('Wallet')}
                        onMouseLeave={() => setHoveredIcon(null)}
                        onClick={() => handleIconClick('Wallet')}
                    >
                        <img
                            src="/martianwallet.svg"  
                            alt="Martian Wallet"
                            className={`${hoveredIcon === 'Wallet' ? 'invert' : ''}`}
                        />
                    </div>

                    {/* GitHub Icon */}
                    <div
                        className={`p-4 cursor-pointer flex items-center justify-center transition-colors ${
                            hoveredIcon === 'GitHub' ? 'bg-white' : 'bg-black hover:bg-white'
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
        </footer>
    );
};

export default Footer;