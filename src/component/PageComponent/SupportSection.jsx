import React from "react";
import { supportData } from "../Shared/CommonData";

const SupportSection = () => {
  return (
    <div className="mt-[90px] md:mt-[120px] lg:mt-[160px] h-[200px] md:h-[170px] lg:h-[151px] bg-[#31418C4D] flex justify-center items-center">
      <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[25px] md:gap-[40px] lg:gap-[80px]">
        {supportData?.map((e, i) => {
          return (
            <div
              className="flex justify-center items-center gap-[16px] md:gap-[24px] lg:gap-[32px]"
              key={i}>
              <img
                src={e?.img}
                alt="secure"
                className="lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[26px] h-[26px]"
              />
              <p className="md:text-[18px] lg:text-[22px] font-neueMontreal text-nowrap">
                {e?.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportSection;
