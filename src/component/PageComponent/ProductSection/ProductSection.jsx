import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "./product.css";
import useProducts from "../../../utils/useProducts";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Loader from "../../Shared/Loader";
import ProductCard from "../../Shared/ProductCard";
import useCategories from "../../../utils/useCategories";

const ProductSection = () => {
  const swiperRef = useRef(null);
  const { products, loading } = useProducts();
  const { categories } = useCategories();
  console.log("categories", categories[0]?.name);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <div className="mt-[153px] relative">
      <div className="container">
        <SectionTitle
          paraText={"Solutions for Your"}
          spanText={"Unique"}
          extraText={"Health Goals"}
        />
        <div className="relative pr-12 !mb-[66px] mt-[45px]">
          <div className="w-[375px] md:w-[500px] lg:w-[1072px]">
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
              <SwiperSlide
                className={`!h-[65px] !w-[82px] !rounded-[100px] cursor-pointer ${
                  selectedCategory == "All"
                    ? "bg-[#E1C06E] text-[#1F1F1F]"
                    : "!border"
                } !flex !justify-center !items-center !text-[20px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal `}
                onClick={() => setSelectedCategory("All")}>
                All
              </SwiperSlide>
              <SwiperSlide
                className={`!h-[65px] !w-[240px] !rounded-[100px] cursor-pointer ${
                  selectedCategory == "Best Selling Products"
                    ? "bg-[#E1C06E] text-[#1F1F1F]"
                    : "!border"
                } !flex !justify-center !items-center !text-[20px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal`}
                onClick={() => setSelectedCategory("Best Selling Products")}>
                Best Selling Products
              </SwiperSlide>
              {categories.map((category, index) => {
                return (
                  <SwiperSlide
                    className={`!h-[65px]  ${
                      category?.name == "Beauty and Hair Loss"
                        ? "!w-[210px]"
                        : category?.name == "Testosterone HRT"
                        ? "!w-[190px]"
                        : category?.name == "Athletic Perfomance"
                        ? "!w-[190px]"
                        : "!w-[140px]"
                    } !rounded-[100px] cursor-pointer ${
                      selectedCategory == category?.name
                        ? "bg-[#E1C06E] text-[#1F1F1F]"
                        : "!border"
                    } !flex !justify-center !items-center !text-[16px] !font-neueMontreal !mr-[12px] hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-[#1F1F1F] font-normal`}
                    onClick={() => setSelectedCategory(category?.name)}>
                    {category?.name}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2  shadow-md hover:bg-[#E1C06E] transition h-[65px] w-[86px] rounded-[100px] border flex justify-center items-center text-[20px] font-neueMontreal">
            <IoArrowForward className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="">
          {loading ? (
            <Loader />
          ) : (
            <div className="product_sec gap-[30px]">
              {filteredProducts?.map((product, index) => {
                return <ProductCard product={product} key={index} />;
              })}
            </div>
          )}
        </div>
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
