import React from "react";
import hipalogo from "../../assets/images/hipalogo.svg";
import Branding from "../../assets/images/Branding.png";
import certifiedLogo from "../../assets/images/certifiedLogo.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="pt-[80px] mt-[160px] backdrop-blur-[50px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(61, 85, 204, 0.7) 0%, rgba(31, 31, 31, 0.1) 100%)",
      }}>
      <div className="w-[1440px] px-[40px] mx-auto flex justify-normal items-center !gap-[182px]">
        <div className="h-[336px] border w-[413px] rounded-[20px]">
          <div
          //   className="w-[413px] h-[336px] rounded-[20px] border"
          //   style={{
          //     border: "2px solid",

          //     borderImageSource:
          //       "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(82, 86, 108, 0.7) 100%)",
          //           }}
          >
            <p className="pt-[35px] px-[66px] text-[43px] font-neueMontreal text-center">
              Let’s Stay In Touch
            </p>
            <p className="px-[66px] text-[16px] font-neueMontreal text-center pb-[35px] ">
              Keep up to date with our latest news & special offers.
            </p>
            <div className="relative border rounded-[8px] w-[333px] h-[60px] flex justify-start items-center mx-auto">
              <input
                className="rounded-[8px] text-[16px] font-neueMontreal pl-[24px]"
                placeholder="enter your email"
              />
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[20px] right-[20px]">
                <path
                  d="M18.7765 2.05293C16.6742 -0.292637 0.860854 5.4532 0.873909 7.551C0.888714 9.92987 7.04945 10.6617 8.75705 11.1581C9.78391 11.4565 10.0589 11.7625 10.2957 12.8781C11.3681 17.9305 11.9065 20.4435 13.1335 20.4996C15.0894 20.5892 20.8282 4.342 18.7765 2.05293Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[336px] w-[192px] mt-[80px] rounded-[20px]">
          {" "}
          <p className="text-[12px] font-neueMontreal">Quick Links</p>
          <div className="mt-[30px] space-y-[20px]">
            <p className="text-[16px] font-neueMontreal">
              Erectile Dysfunction
            </p>
            <p className="text-[16px] font-neueMontreal">Weight Loss</p>
            <p className="text-[16px] font-neueMontreal">Men’s Hair Loss</p>
          </div>
          <div className="mt-[60px] space-y-[20px]">
            <p className="text-[12px] font-neueMontreal">Contact Info</p>
            <p className="text-[16px] font-neueMontreal flex justify-center items-center gap-[12px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.33331 4L5.942 6.61131C7.64104 7.57401 8.35892 7.57401 10.058 6.61131L14.6666 4"
                  stroke="white"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.34382 8.98391C1.38741 11.0276 1.4092 12.0494 2.16328 12.8064C2.91737 13.5634 3.96687 13.5897 6.06587 13.6425C7.35952 13.675 8.64044 13.675 9.9341 13.6425C12.0331 13.5897 13.0826 13.5634 13.8367 12.8064C14.5908 12.0494 14.6126 11.0276 14.6561 8.98391C14.6702 8.32679 14.6702 7.67355 14.6561 7.01643C14.6126 4.97274 14.5908 3.95089 13.8367 3.19394C13.0826 2.43698 12.0331 2.41061 9.9341 2.35788C8.64044 2.32537 7.35952 2.32537 6.06586 2.35787C3.96687 2.41061 2.91737 2.43697 2.16328 3.19393C1.4092 3.95088 1.3874 4.97273 1.34382 7.01642C1.32981 7.67354 1.32981 8.32679 1.34382 8.98391Z"
                  stroke="white"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              hello@rizzpharma.com
            </p>
          </div>
        </div>
        <div className="h-[336px] w-[192px] mt-[80px] rounded-[20px]">
          {" "}
          <p className="text-[12px] font-neueMontreal">Our Company</p>
          <div className="mt-[30px] space-y-[20px]">
            <p className="text-[16px] font-neueMontreal">HIPAA Notice</p>
            <p className="text-[16px] font-neueMontreal">Privacy Policy</p>
            <p className="text-[16px] font-neueMontreal">
              Return & Refund Policy
            </p>
            <p className="text-[16px] font-neueMontreal">Terms Of Use</p>
            <p className="text-[16px] font-neueMontreal">CCPA Opt-Out</p>
            <p className="text-[16px] font-neueMontreal">Opt-Out Preferences</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-[296px] pt-[60px]">
        <div className="w-[186px] h-[107px] ">
          <img src={hipalogo} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="w-[500px] h-[107] ">
          <div className="gap-[12px] flex justify-normal items-center">
            <div className="w-[36px] h-[36px] bg-[#434B76] rounded-full flex justify-center items-center">
              <FaFacebook className="text-white text-[16px]" />
            </div>
            <div className="w-[36px] h-[36px] bg-[#434B76] rounded-full flex justify-center items-center">
              <FaInstagram className="text-white text-[16px]" />
            </div>
          </div>
          <div className="flex justify-normal items-center gap-[22px] mt-[26px]">
            <img src={certifiedLogo} alt="" />
            <p className="text-[16px] font-neueMontreal">
              Copyright © 2024 Rizz Pharma All Right Reserved - Built by
              Business Web Social
            </p>
          </div>
        </div>
      </div>
      <div className="w-[1326px] mx-auto pt-[50px]">
        <img src={Branding} alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default Footer;
