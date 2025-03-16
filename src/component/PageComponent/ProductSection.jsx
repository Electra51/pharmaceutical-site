import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import cartIcon from "../../assets/images/Icon-dashboard.svg";
import useProducts from "../../utils/useProducts";
import Loader from "../Shared/Loader";

const ProductSection = () => {
  const swiperRef = useRef(null);
  const { products, loading } = useProducts();

  return (
    <div className="mt-[153px] relative">
      <div className="container mb-[45px]">
        <p className="section_title mb-20 font-impact">
          Solutions for Your{" "}
          <span className="text-gold-gradient-1">Unique</span> Health Goals
        </p>
      </div>
      <div className="container relative pr-12  !mb-[66px]">
        <div className="w-[1072px] ">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide className="!h-[65px] !w-[82px] !rounded-[100px] !border !flex !justify-center !items-center !text-[20px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal">
              All
            </SwiperSlide>
            <SwiperSlide className="!h-[65px] !w-[240px] !rounded-[100px] !border !flex !justify-center !items-center !text-[20px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal">
              Best Selling Products
            </SwiperSlide>
            <SwiperSlide className="!h-[65px] !w-[140px] !rounded-[100px] !border !flex !justify-center !items-center !text-[16px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal">
              Weight Loss
            </SwiperSlide>
            <SwiperSlide className="!h-[65px] !w-[210px] !rounded-[100px] !border !flex !justify-center !items-center !text-[16px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal">
              Beauty And Hair Loss
            </SwiperSlide>
            <SwiperSlide className="!h-[65px] !w-[190px] !rounded-[100px] !border !flex !justify-center !items-center !text-[16px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal">
              Testosterone/HRT
            </SwiperSlide>
            <SwiperSlide className="!h-[65px] !w-[150px] !rounded-[100px] !border !flex !justify-center !items-center !text-[16px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal">
              Sexual Health
            </SwiperSlide>
            <SwiperSlide className="!h-[65px] !w-[150px] !rounded-[100px] !border !flex !justify-center !items-center !text-[16px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal">
              Brain Health
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2  shadow-md hover:bg-[#E1C06E] transition h-[65px] w-[86px] rounded-[100px] border flex justify-center items-center text-[20px] font-neueMontreal">
          <IoArrowForward className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className=" grid grid-cols-4 gap-[30px]">
            {products?.map((product, index) => {
              return (
                <div
                  className="w-[270px] h-[262px] border bg-[#31418C4D] rounded-[12px] relative"
                  //   style={{
                  //     backgroundImage: `url(${product.image})`,
                  //     backgroundRepeat: "no-repeat",
                  //     backgroundSize: "contain",
                  //       }}
                >
                  <div className="flex justify-center items-center gap-[24px] mt-6">
                    <div
                      className="w-[113px] h-[28px] rounded-tr-[12px] rounded-bl-[12px] absolute right-0 top-0 text-[13px] text-white font-normal font-neueMontreal text-center flex justify-center items-center"
                      style={{
                        background:
                          "linear-gradient(268.79deg, #A75356 1.04%, #D78C6C 98.57%)",
                      }}>
                      {product?.status}
                    </div>
                    <div className="w-[70px] h-[157px] ">
                      <img
                        src={product?.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />{" "}
                    </div>

                    <p className="text-gold-gradient-1 text-[18px] font-neueMontreal w-[120px]">
                      {product?.product_name}
                    </p>
                  </div>
                  <div className="w-[270px] h-[65px] rounded-b-[12px] absolute bottom-0 left-0 bg-[#1F1F1F4D]">
                    <p className="text-[12px] font-normal font-neueMontreal text-white w-[151px] flex justify-center items-center h-[65px]">
                      {" "}
                      {product?.price}
                    </p>
                  </div>

                  <div
                    className="w-[87px] h-[65px] rounded-br-[12px] flex justify-center items-center absolute bottom-0 right-0"
                    style={{
                      background:
                        "linear-gradient(180deg, #C1842D 0%, #ECC974 100%)",
                    }}>
                    <img src={cartIcon} alt="" width={24} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-[50px] flex justify-center items-center gap-[32px]">
        <div className="w-[60px] h-[60px] rounded-full bg-[#E1C06E] flex justify-center items-center">
          <IoArrowBack className="text-[24px] text-black" />
        </div>
        <div className="w-[60px] h-[60px] rounded-full bg-[#E1C06E] flex justify-center items-center">
          <IoArrowForward className="text-[24px] text-black" />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
