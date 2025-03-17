import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import textureImg2 from "../../../assets/images/1k_Dissolve_Noise_Texture1.png";
import "swiper/css";
import "swiper/css/pagination";
import starSVG from "../../../assets/images/Star.svg";
import clientSVG from "../../../assets/images/client.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./last.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { testimonials } from "../../Shared/CommonData";
import Footer from "../../Layouts/Footer/Footer";

const LastSection = () => {
  return (
    <div className="last_section">
      <div>
        <div className="container !pt-[820px] lg:!pt-[696px]">
          <SectionTitle
            paraText={"Hear What"}
            spanText={"Rizz"}
            extraText={"Patients Have To Say"}
          />
        </div>
        <div className="mt-[45px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}>
            {testimonials?.map((testimonial, i) => {
              return (
                <SwiperSlide
                  className="mr-[16px] !w-[414px] !h-[440px]"
                  key={i}>
                  <div className="relative !w-[414px] !h-[440px] p-[32px]">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${textureImg2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <div className="absolute inset-0 bg-[#2c2c5457] opacity-[41] backdrop-blur-[61.94px] rounded-[12px]" />

                    <div className="relative z-10 text-white mt-[30px]">
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18.3857 9.53991L21.4067 9.53991L21.4067 17.7266L12.5116 17.7266L12.5116 10.3895L17.6304 0.272011L21.9102 0.272011L18.3857 9.53991ZM5.96609 9.53992L8.98709 9.53992L8.98709 17.7266L0.0919743 17.7266L0.0919736 10.3895L5.21087 0.272012L9.49056 0.272012L5.96609 9.53992Z"
                          fill="#F6F6F6"
                        />
                      </svg>
                      <p className="text-[18px] font-neueMontreal !font-normal text-justify mt-[30px]">
                        {testimonial.review}
                      </p>
                      <div className="flex items-center justify-center mt-[35px] w-[168px] h-[24px] mx-auto">
                        <img src={starSVG} alt="" />
                      </div>
                      <div className="mt-[53px] pb-[37px]">
                        <div className="flex justify-center items-start gap-[20px]">
                          <div className="h-[60px] w-[60px] rounded-full">
                            <img
                              src={testimonial?.profileImg}
                              alt=""
                              className="h-full w-full object-fill rounded-full"
                            />
                          </div>
                          <div className="">
                            <p className="font-semibold font-neueMontreal text-xl text-start">
                              {testimonial?.name}
                            </p>
                            <p className="font-semibold font-neueMontreal text-[16px] opacity-[50%] text-start">
                              {testimonial?.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LastSection;
