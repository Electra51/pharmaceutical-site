import React from "react";
import ProductCard from "../../Shared/ProductCard";

const SearchItemSection = ({ items }) => {
  console.log("item", items);
  return (
    <div className="search-item-section py-[80px] mb-[200px] grid grid-cols-4 gap-10">
      {items.length > 0 ? (
        items.map((item, i) => <ProductCard key={i} product={item} />)
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default SearchItemSection;
