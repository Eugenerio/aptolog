"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";
import FootablePicture from "@/components/picture";
import InfoField from "@/components/infofield";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSaveChanges = () => {
    // Handle login logic here
  };

  const handleClickGoToSecurity = () => {
    router.push("/settings/security");
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex justify-center space-x-10 mt-20 mr-[550px]">
          <button className="bg-[#1b1b1b] flex justify-center text-2xl w-60 h-16 items-center text-white  cursor-pointer hover:bg-white hover:text-black">
            Profile
          </button>
          <button
            onClick={handleClickGoToSecurity}
            className="bg-[#131313] flex justify-center text-2xl w-60 h-16 items-center text-[#999999]  cursor-pointer hover:bg-white hover:text-black"
          >
            Security
          </button>
        </div>
        <div className="flex justify-center mt-10 space-x-10">
          <FootablePicture
            imageData={""}
            iconUrl="https://file.rendit.io/n/Cz1MTzZytWhmbzlV301q.svg"
            onImageUpload={function (image: File): void {
              throw new Error("Function not implemented.");
            }}
          />
          <div className="flex flex-col items-center justify-center gap-10">
            <InfoField label="aptolog id" value="#12183307128" readonly />
            <InfoField label="name" value={name} onChange={handleNameChange} />
            <InfoField
              label="mail"
              value={email}
              onChange={handleEmailChange}
            />
            <InfoField label="downloads" value="3" readonly />
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button
            onClick={handleSaveChanges}
            className="px-7 py-3 bg-[#1b1b1b] text-white border border-white rounded-none cursor-pointer mb-6 hover:bg-white hover:text-black uppercase "
          >
            save changes
          </button>
        </div>
        <div className="flex flex-grow"></div>
      </div>

      <Footer />
    </div>
  );
}
