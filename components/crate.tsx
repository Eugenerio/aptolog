import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface CrateProps {
  name: string;
  version: string;
  description: string;
  author?: string;
  date: string;
  delete?: () => void;
}

const Crate: React.FC<CrateProps> = ({
  name,
  version,
  description,
  author,
  date,
  delete: handleDelete,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className="bg-[#1b1b1b] flex flex-col justify-center gap-6 w-full p-8"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="text-2xl font-sans font-medium text-[#fafafa] mb-px w-[114px]">
          {name}
        </div>
        <div className="text-2xl font-sans text-[#fafafa] w-12 ">{version}</div>
        {handleDelete && (
          <div className="mr-0 flex ">
            <FontAwesomeIcon
              icon={faTrash}
              className="text-white cursor-pointer"
              onClick={handleDelete}
            />
          </div>
        )}
      </div>
      <div
        className={`whitespace-normal text-base w-[800px] font-sans text-[#cccccc] self-start ${
          !hovered ? "whitespace-nowrap overflow-hidden text-ellipsis" : ""
        }`}
      >
        {description}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="whitespace-nowrap text-base font-sans capitalize text-[#cccccc] w-32">
          {author}
        </div>
        <div className="whitespace-nowrap text-base font-sans text-[#cccccc] w-24">
          {date}
        </div>
      </div>
    </div>
  );
};

export default Crate;
