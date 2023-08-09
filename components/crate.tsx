import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

interface PopupProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledPopup = styled.div`
  background-color: #040404;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  width: auto; // Allow the width to adjust to content
  height: auto;
  items: center;
  animation: ${slideDown} 0.5s ease forwards;
`;

const Popup: React.FC<PopupProps> = ({ onCancel, onConfirm }) => {
  return (
    <StyledPopup id="PopUpRoot">
      <div className="bg-[#040404] flex flex-col justify-center gap-2 p-4">
        <div className="text-center text-lg font-['SF_Pixelate'] uppercase text-[#fafafa]">
          Do you really want to delete compiler_builtins v1.1?
        </div>
        <div className="flex flex-row gap-2 items-center">
          <button
            className="border-solid border-[#cccccc] bg-[#1b1b1b] flex flex-col justify-center w-16 h-8 items-center border"
            id="Button1"
            onClick={onCancel}
          >
            <div className="font-sans uppercase text-[#cccccc]">no</div>
          </button>
          <button
            className="border-solid border-[#cccccc] bg-[#1b1b1b] flex flex-col justify-center w-16 h-8 items-center border"
            id="Button2"
            onClick={onConfirm}
          >
            <div className="font-sans uppercase text-[#cccccc]">yes</div>
          </button>
        </div>
      </div>
    </StyledPopup>
  );
};

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
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ left: 0, top: 0 });

  const handleHover = (event: React.MouseEvent) => {
    setHovered(!hovered);
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      left: rect.left + rect.width + 10, // Adjust the positioning as needed
      top: rect.top, // Adjust the positioning as needed
    });
  };

  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  const handlePopupCancel = () => {
    setShowPopup(false);
  };

  const handlePopupConfirm = () => {
    setShowPopup(false);
    if (handleDelete) {
      handleDelete();
    }
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
        <div className="mr-0 flex ">
          <FontAwesomeIcon
            icon={faTrash}
            className="text-white cursor-pointer"
            onClick={handleDeleteClick}
          />
        </div>
        {showPopup && (
          <StyledPopup
            id="PopUpRoot"
            style={{ left: popupPosition.left, top: popupPosition.top }}
          >
            <Popup
              onCancel={handlePopupCancel}
              onConfirm={handlePopupConfirm}
            />
          </StyledPopup>
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
