import React, { useState } from 'react';

interface CheckPasswordProps {
  value: string;
  showPasswordCheck: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleShowPasswordCheck: () => void;
}

const CheckPassword: React.FC<CheckPasswordProps> = ({
  value,
  showPasswordCheck,
  onChange,
  onToggleShowPasswordCheck,
}) => {
  return (
    <div className="mb-8 relative">
      <input
        type={showPasswordCheck ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder="PASSWORD"
        className="font-sf-pixelate w-full p-4 bg-transparent text-white border-white border rounded-none pr-[100px]"
      />
      <span className="absolute top-[50%] right-20 -translate-y-1/2 cursor-pointer mx-2">|</span>
      <span
        onClick={onToggleShowPasswordCheck}
        className="absolute top-[50%] right-4 -translate-y-1/2 cursor-pointer mx-2"
      >
        {showPasswordCheck ? 'HIDE' : 'SHOW'}
      </span>
    </div>
  );
};

export default CheckPassword;