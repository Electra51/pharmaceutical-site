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
  const [visibleCount, setVisibleCount] = useState(8);
  const { products, loading } = useProducts();
  const { categories } = useCategories();
  console.log("categories", categories[0]?.name);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  // First 8 products
  const firstEightProducts = filteredProducts.slice(0, 8);
  // Remaining products
  const remainingProducts = filteredProducts.slice(8);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <div className="mt-[153px] relative">
      <div className="container">
        <SectionTitle
          paraText={"Solutions for Your"}
          spanText={"Unique"}
          extraText={"Health Goals"}
        />
        <div className="relative pr-12 !mb-[66px] mt-[45px]">
          {!isBeginning && (
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 shadow-md hover:bg-[#E1C06E] transition h-[65px] w-[86px] rounded-[100px] border flex justify-center items-center text-[20px] font-neueMontreal">
              <IoArrowBack className="w-6 h-6 text-white" />
            </button>
          )}
          <div className="product_swiper_container mx-auto">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
                1094: { slidesPerView: 3, spaceBetween: 50 },
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
            className={`absolute top-1/2 right-0 z-10 transform -translate-y-1/2 shadow-md hover:bg-[#E1C06E] transition h-[65px] w-[86px] rounded-[100px] border flex justify-center items-center text-[20px] font-neueMontreal `}>
            <IoArrowForward className="w-6 h-6 text-white" />
          </button>
        </div>
        {/* <div className="">
          {loading ? (
            <Loader />
          ) : (
            <div className="product_sec gap-[30px]">
              {filteredProducts.slice(0, visibleCount).map((product, index) => {
                return <ProductCard product={product} key={index} />;
              })}
            </div>
          )}
        </div>
      </div> */}
        <div>
          {loading ? (
            <Loader />
          ) : (
            <div className="product_sec gap-[30px]">
              {showMore
                ? remainingProducts.map((product, index) => (
                    <ProductCard product={product} key={index} />
                  ))
                : firstEightProducts.map((product, index) => (
                    <ProductCard product={product} key={index} />
                  ))}
            </div>
          )}
        </div>
      </div>

      {/* <div className="mt-[50px] flex justify-center items-center gap-[32px]">
        <div className="w-[60px] h-[60px] rounded-full bg-[#E1C06E] flex justify-center items-center">
          <IoArrowBack className="text-[24px] text-black" />
        </div>
        <div className="w-[60px] h-[60px] rounded-full bg-[#E1C06E] flex justify-center items-center">
          <IoArrowForward className="text-[24px] text-black" />
        </div>
      </div> */}
      {/* Toggle Buttons */}
      <div className="mt-[50px] flex justify-center items-center gap-[32px]">
        {!showMore ? (
          <div className="mt-[50px] flex justify-center items-center gap-[32px]">
            <div className="w-[60px] h-[60px] rounded-full border border-[#E1C06E] flex justify-center items-center cursor-pointer">
              <IoArrowBack className="text-[24px] text-[#E1C06E]" />
            </div>

            <button
              onClick={handleShowMore}
              className="w-[60px] h-[60px] rounded-full bg-[#E1C06E] flex justify-center items-center cursor-pointer">
              <IoArrowForward className="text-[24px] text-black" />
            </button>
          </div>
        ) : (
          <div className="mt-[50px] flex justify-center items-center gap-[32px]">
            <button
              onClick={handleShowLess}
              className="w-[60px] h-[60px] rounded-full bg-[#E1C06E] flex justify-center items-center cursor-pointer">
              <IoArrowBack className="text-[24px] text-black" />
            </button>

            <button
              onClick={handleShowMore}
              className="w-[60px] h-[60px] rounded-full border border-[#E1C06E] flex justify-center cursor-pointer items-center">
              <IoArrowForward className="text-[24px] text-[#E1C06E]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
