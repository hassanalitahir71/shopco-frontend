import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const TopSelling = () => {
  const products = [
    {
      id: 1,
      title: "Verticle Striped Shirt",
      rating: 5.0,
      price: 212,
      originalPrice: 232,
      discount: "-23%",
      imageUrl: "/img/verticle.png",
    },
    {
      id: 2,
      title: "Courage Graphic T-Shirt",
      rating: 4.0,
      price: 145,
      originalPrice: null,
      discount: null,
      imageUrl: "/img/Loose.png",
    },
    {
      id: 3,
      title: "Loose Fit Bermuda Shorts",
      rating: 3.0,
      price: 80,
      originalPrice: null,
      discount: null,
      imageUrl: "/img/courage.png",
    },
    {
      id: 4,
      title: "Faded Skinny Jeans",
      rating: 4.5,
      price: 210,
      originalPrice: null,
      discount: null,
      imageUrl: "/img/faded.png",
    },
  ];

  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%] md:w-[85%] flex flex-col gap-8 md:gap-10">
        {/* Heading */}
        <div className="flex justify-center">
          <h1 className="font-extrabold text-2xl md:text-4xl font-integral text-center">
            TOP SELLING
          </h1>
        </div>

        {/* Cards Container - Now defaults to 2 columns, goes to 4 on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col w-full">
              {/* Image Container */}
              <div className="w-full bg-[#f0eeed] rounded-2xl overflow-hidden mb-2 md:mb-3 aspect-square flex items-center justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Info */}
              <div className="flex flex-col gap-1 mx-1 md:mx-2">
                {/* Product Name */}
                <h1 className="font-bold font-integral cursor-pointer hover:underline text-xs sm:text-sm md:text-base truncate">
                  {product.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-1 md:gap-2">
                  <Rating
                    name={`rating-${product.id}`}
                    defaultValue={product.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                    sx={{ fontSize: { xs: "12px", sm: "16px" } }} // Make stars slightly smaller on mobile
                  />
                  <span className="text-xs md:text-sm text-gray-500">
                    {product.rating}/5
                  </span>
                </div>

                {/* Price - Added flex-wrap so the badge drops down if screen is too narrow */}
                <div className="flex flex-row items-center gap-2 md:gap-3 mt-1 flex-wrap">
                  <p className="text-base md:text-xl font-bold font-integral">
                    ${product.price}
                  </p>

                  {product.originalPrice && (
                    <p className="line-through text-gray-400 text-xs md:text-sm font-bold">
                      ${product.originalPrice}
                    </p>
                  )}

                  {product.discount && (
                    <p className="bg-red-100 px-2 py-0.5 md:py-1 rounded-2xl text-[9px] md:text-[10px] font-bold text-red-500">
                      {product.discount}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-4">
          <button className="hover:shadow-black-2xl py-2 rounded-full border px-16 md:px-20 cursor-pointer hover:bg-gray-100 transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopSelling;
