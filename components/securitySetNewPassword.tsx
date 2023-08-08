import React, { useState } from "react";

interface SecurityPasswordSetInputProps {
  value: string;
  showPassword: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleShowPassword: () => void;
}

const SecurityPasswordSetInput: React.FC<SecurityPasswordSetInputProps> = ({
  value,
  showPassword,
  onChange,
  onToggleShowPassword,
}) => {
  return (
    <div className="mb-8 relative flex items-center">
      <div className="text-[#aaaaaa] font-sf-pixelate text-xl uppercase pr-[75px]">
        Set
      </div>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder="NEW PASSWORD"
        className="font-sf-pixelate w-full p-4 bg-transparent text-white border-white border rounded-none pr-[100px]"
      />
      <span className="absolute top-[50%] text-white right-20 -translate-y-1/2 cursor-pointer mx-2">
        |
      </span>
      <span
        onClick={onToggleShowPassword}
        className="font-sf-pixelate absolute top-[50%] text-white right-4 -translate-y-1/2 cursor-pointer mx-2"
      >
        {showPassword ? "HIDE" : "SHOW"}
      </span>
    </div>
  );
};

export default SecurityPasswordSetInput;
