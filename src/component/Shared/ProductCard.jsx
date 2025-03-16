import React from "react";
import cartIcon from "../../assets/images/Icon-dashboard.svg";
const ProductCard = ({ product }) => {
  return (
    <div className="w-[270px] h-[262px] bg-[#31418C4D] rounded-[12px] relative">
      <div className="flex justify-center items-center gap-[24px] mt-6">
        {product?.status == "a" ? (
          ""
        ) : product?.status == "Research use only" ? (
          <div
            className="w-[113px] h-[28px] rounded-tr-[12px] rounded-bl-[12px] absolute right-0 top-0 text-[13px] text-white font-normal font-neueMontreal text-center flex justify-center items-center"
            style={{
              background:
                "linear-gradient(268.79deg, #A75356 1.04%, #D78C6C 98.57%)",
            }}>
            {product?.status}
          </div>
        ) : (
          <div
            className="w-[113px] h-[28px] rounded-tr-[12px] rounded-bl-[12px] absolute right-0 top-0 text-[13px] text-white font-normal font-neueMontreal text-center flex justify-center items-center border_status"
            style={{
              background:
                "linear-gradient(180deg, rgba(108, 34, 29, 0.3) 0%, rgba(149, 65, 57, 0.3) 100%)",
            }}>
            {product?.status}
          </div>
        )}

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
        <p className="text-[12px] font-normal font-SofiaPro text-white w-[162px] flex items-center h-[65px] pl-[8px]">
          {" "}
          {product?.price}
        </p>
      </div>

      <div
        className="w-[87px] h-[65px] rounded-br-[12px] flex justify-center items-center absolute bottom-0 right-0"
        style={{
          background: "linear-gradient(180deg, #C1842D 0%, #ECC974 100%)",
        }}>
        <img src={cartIcon} alt="" width={24} />
      </div>
    </div>
  );
};

export default ProductCard;
