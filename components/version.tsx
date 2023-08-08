import React from "react";

interface VersionCrateProps {
  version: string;
  author: string;
  date: string;
  size: string;
}

const VersionCrate: React.FC<VersionCrateProps> = ({
  version,
  author,
  date,
  size,
}) => {
  return (
    <div className="bg-[#1b1b1b] flex flex-row justify-between w-full h-32 items-center px-8">
      <div className="flex flex-col gap-6 h-20">
        <div className="whitespace-nowrap text-2xl font-sans font-medium text-[#fafafa]">
          {version}
        </div>
        <div className="whitespace-nowrap text-xl font-sans capitalize text-[#cccccc] mr-px">
          {author}
        </div>
      </div>
      <div className="flex flex-col gap-6 h-20">
        <div className="whitespace-nowrap text-xl font-sans text-[#cccccc] ml-3">
          {date}
        </div>
        <div className="flex flex-row gap-4 items-center">
          <img
            src="https://file.rendit.io/n/w1lVOm4WoUZprM33eQZX.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
            alt="size icon"
          />
          <div className="whitespace-nowrap text-xl font-sans uppercase text-[#cccccc] w-2/3">
            {size}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionCrate;
