import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Loader from "../../Shared/Loader";
import useCategories from "../../../utils/useCategories";
import SupportSection from "../SupportSection";
import ProductSection from "../ProductSection/ProductSection";
import "./category.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import AddSection from "../AddSection/AddSection";

const CategorySection = () => {
  const { categories, loading } = useCategories();

  return (
    <div className="category_section">
      <div className="category-content">
        <div className="container">
          <SectionTitle spanText={"Category"} paraText={"Shop By"} />
          <div className="mt-[31px]">
            {/* 46-15=21 */}
            {loading ? (
              <Loader />
            ) : (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 375: 1, 600: 2, 900: 3 }}
                gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "30px" }}>
                <Masonry>
                  {categories.map((category, i) => {
                    return (
                      <div
                        key={i}
                        className="mx-auto category-item w-[370px] relative mt-[15px]">
                        <p
                          className={`text-[36px] font-medium font-neueMontreal absolute top-[24px] z-10 left-[24px] ${
                            i === 3 || i === 4 || i === 5
                              ? "w-[217px]"
                              : "w-[154px]"
                          } text-wrap leading-[120%]`}>
                          {category.name}
                        </p>

                        <img
                          src={category.image}
                          alt={category.name}
                          style={{ width: "100%", display: "block" }}
                          className="relative"
                        />
                      </div>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        </div>

        <SupportSection />
        <ProductSection />
        <AddSection />
      </div>
    </div>
  );
};

export default CategorySection;
