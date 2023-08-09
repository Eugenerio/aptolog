import React, { useState } from "react";

interface PasswordInputProps {
  value: string;
  showPassword: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleShowPassword: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  showPassword,
  onChange,
  onToggleShowPassword,
}) => {
  return (
    <div className="mb-8 relative">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder="PASSWORD"
        className="font-sf-pixelate w-full p-4 bg-transparent text-white border-white border rounded-none pr-[100px]"
      />
      <span className="absolute top-[50%] right-20 -translate-y-1/2 cursor-pointer mx-2">
        |
      </span>
      <span
        onClick={onToggleShowPassword}
        className="absolute font-sf-pixelate top-[50%] right-4 -translate-y-1/2 cursor-pointer mx-2"
      >
        {showPassword ? "HIDE" : "SHOW"}
      </span>
    </div>
  );
};

export default PasswordInput;
