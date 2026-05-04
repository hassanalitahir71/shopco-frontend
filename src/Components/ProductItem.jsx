import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";


const ProductItem = ({
  id,
  name,
  price,
  originalPrice,
  discount,
  rating,
  image,
}) => {
    
  const { currency } = useContext(ShopContext);

  return (
    
    <Link to={`/Product/${id}`} className="flex flex-col w-full">
      {/* Image Container */}
      <div className="w-full h-full  bg-[#f0eeed] rounded-2xl hover:scale-110 transition ease-in-out overflow-hidden mb-2 md:mb-3 aspect-square flex items-center  justify-center">
        <img src={image} alt={name} className="w-full h-full " />
      </div>

      {/* Card Info */}
      <div className="flex flex-col gap-1 mx-1 md:mx-2">
        {/* Product Name */}
        <h1 className="font-bold font-integral cursor-pointer hover:underline text-xs sm:text-sm md:text-base truncate">
          {name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-1 md:gap-2">
          <Rating
            name={`rating-${id}`}
            value={rating}
            precision={0.1}
            readOnly
            size="small"
            sx={{ fontSize: { xs: "12px", sm: "16px" } }}
          />
          <span className="text-xs md:text-sm text-gray-500">{rating}/5</span>
        </div>

        {/* Price */}
        <div className="flex flex-row items-center gap-2 md:gap-3 mt-1 flex-wrap">
          <p className="text-base md:text-xl font-bold font-integral">
            {currency}
            {price}
          </p>

          {originalPrice && (
            <p className="line-through text-gray-400 text-xs md:text-sm font-bold">
              {currency}
              {originalPrice}
            </p>
          )}

          {discount && (
            <p className="bg-red-100 px-2 py-0.5 md:py-1 rounded-2xl text-[9px] md:text-[10px] font-bold text-red-500">
              {discount}%
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
