import React from "react";

interface InfoFieldProps {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
}

const InfoField: React.FC<InfoFieldProps> = ({
  label,
  value,
  onChange,
  readonly,
}) => {
  return (
    <div className="flex flex-row gap-10 items-center">
      <div className="text-xl font-['SF_Pixelate'] uppercase text-[#cccccc] w-40 shrink-0">
        {label}
      </div>
      <div className="border-solid border-[#cccccc] flex flex-row justify-center w-[580px] h-16 items-center border">
        <input
          type="text"
          className="text-xl font-sans uppercase text-[#cccccc] w-[496px] bg-transparent border-none outline-none"
          value={value}
          onChange={onChange}
          readOnly={readonly}
        />
        <img
          src="https://file.rendit.io/n/w2SKefHHj4MOGdI6Zb0U.svg"
          className="w-5 shrink-0"
        />
      </div>
    </div>
  );
};

export default InfoField;
