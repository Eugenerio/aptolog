import React, { useState } from "react";

interface FootablePictureProps {
  imageData: string;
  iconUrl: string;
  onImageUpload: (image: File) => void;
}

const FootablePicture: React.FC<FootablePictureProps> = ({
  imageData,
  iconUrl,
  onImageUpload,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIconClick = () => {
    if (!isHovered) {
      // Show the file input on icon click
      setIsHovered(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Perform the upload logic here and call the onImageUpload callback
      onImageUpload(file);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div
        className="bg-[url(https://file.rendit.io/n/W13OBwl4pgnPdm3Qabne.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end h-[240px] w-[240px] cursor-pointer"
        onClick={handleIconClick}
      >
        <div
          className={`bg-[#1b1b1b] flex flex-col justify-center h-10 shrink-0 items-center mb-[-22px] ml-[-22px] ${
            isHovered ? "opacity-75 hover:opacity-100" : ""
          }`}
        >
          <img src={iconUrl} className="w-6" />
        </div>
        {isHovered && (
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        )}
      </div>
    </div>
  );
};

export default FootablePicture;
