import React, { useState, useRef, useEffect } from "react";

interface ReasonCardProps {
  title: string;
  description: string;
}

const Card: React.FC<ReasonCardProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rectWidth, setRectWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setRectWidth(cardRef.current.clientWidth);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef} // Reference to the card container
      className={`flex-1 flex flex-col items-center justify-center gap-[24px] rounded-none p-6 ${
        isHovered ? "bg-[#1b1b1b] text-black" : "bg-grey text-light-grey"
      } card-container`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-4 w-full bg-[#1b1b1b] relative">
        <div
          style={{ width: rectWidth }}
          className={`bg-white transition-transform transform ${
            isHovered ? "scale-x-1" : "scale-x-0"
          } origin-bottom`}
        />
      </div>
      <div className="self-stretch relative h-4" />
      <div className={`text-center text-white`}>
        <div className="uppercase font-bold text-3xl pb-4">{title}</div>
        <div className="text-2xl leading-[140%]">{description}</div>
      </div>
      {isHovered && (
        <div className="text-white font-bold text-xl cursor-pointer mt-4">
          READ MORE
        </div>
      )}
    </div>
  );
};

export default Card;
