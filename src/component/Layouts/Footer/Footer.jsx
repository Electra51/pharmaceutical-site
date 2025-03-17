import React from "react";
import hipalogo from "../../../assets/images/hipalogo.svg";
import Branding from "../../../assets/images/Branding.png";
import certifiedLogo from "../../../assets/images/certifiedLogo.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "../../../component/PageComponent/LastSection/last.css";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div
      className="pt-[80px] mt-[160px] backdrop-blur-[50px] flex flex-col justify-center items-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(61, 85, 204, 0.7) 0%, rgba(31, 31, 31, 0.1) 100%)",
      }}>
      <FooterTop />

      <div className="flex lg:flex-row flex-col md:flex-col justify-center items-center gap-[50px] md:gap-[70px] lg:gap-[270px]">
        <div className="w-[186px] h-[107px] mx-auto lg:mx-auto mt-[74px]">
          <img src={hipalogo} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="w-[365px] lg:w-[500px] h-[134px] mx-auto mt-[60px]">
          <div className="gap-[12px] flex justify-center lg:justify-normal items-center">
            <div className="w-[36px] h-[36px] bg-[#434B76] rounded-full flex justify-center items-center">
              <FaFacebook className="text-white text-[16px]" />
            </div>
            <div className="w-[36px] h-[36px] bg-[#434B76] rounded-full flex justify-center items-center">
              <FaInstagram className="text-white text-[16px]" />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-normal items-center gap-[22px] mt-[26px]">
            <img src={certifiedLogo} alt="" />
            <p className="text-[16px] font-neueMontreal lg:text-start text-center">
              Copyright © 2024 Rizz Pharma All Right Reserved - Built by
              Business Web Social
            </p>
          </div>
        </div>
      </div>
      <div className="xl:w-[1326px] lg:w-[1024px] md:w-[768px] w-[375px] mx-auto pt-[50px]">
        <img src={Branding} alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default Footer;
