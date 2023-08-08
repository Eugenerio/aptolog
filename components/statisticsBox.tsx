"use client";

import React from 'react';

interface StaticBoxProps {
  downloadsLastWeek: string;
  packages: string;
  downloadsLastMonth: string;
}

const StaticBox: React.FC<StaticBoxProps> = ({
  downloadsLastWeek,
  packages,
  downloadsLastMonth,
}) => {
  return (
    <div className='w-full bg-[#1b1b1b] text-2xl'>
        <div className="text-white font-sf-pixelate w-full bg-grey py-10 box-border text-center flex justify-center">
            <div className="flex flex-row items-start justify-start gap-[180px]">
                <div className="flex flex-col items-center justify-center gap-[24px]">
                <div className="relative uppercase">Downloads_last_week</div>
                <div className="relative text-13xl uppercase">{downloadsLastWeek}</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[24px]">
                <div className="relative uppercase">Packages</div>
                <div className="relative text-13xl uppercase">{packages}</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[24px]">
                <div className="relative uppercase">Downloads_last_Month</div>
                <div className="relative text-13xl uppercase">{downloadsLastMonth}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StaticBox;