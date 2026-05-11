import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import RelatedProducts from "../Components/RelatedProducts";
import NewsletterBanner from "../Components/NewsletterBanner";

const Product = () => {
  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      rating: 4.5,
      isVerified: true,
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "August 14, 2023",
    },
    {
      id: 2,
      name: "Alex M.",
      rating: 5,
      isVerified: true,
      text: "Great quality and fits perfectly. Will definitely be buying more in different colors. Highly recommended!",
      date: "September 2, 2023",
    },
    {
      id: 3,
      name: "Jordan K.",
      rating: 4,
      isVerified: false,
      text: "Good material, but the sizing runs a little small. I recommend sizing up if you prefer a looser fit.",
      date: "October 11, 2023",
    },
    {
      id: 4,
      name: "Emily R.",
      rating: 5,
      isVerified: true,
      text: "Super soft and looks exactly like the pictures. Shipping was surprisingly fast too!",
      date: "November 5, 2023",
    },
    {
      id: 5,
      name: "Michael T.",
      rating: 3.5,
      isVerified: true,
      text: "It's decent. The fabric is a bit thinner than I expected, but it's lightweight and okay for the summer heat.",
      date: "December 12, 2023",
    },
    {
      id: 6,
      name: "Sarah L.",
      rating: 5,
      isVerified: true,
      text: "Absolutely stunning! The print is high quality and hasn't faded at all after multiple washes.",
      date: "January 20, 2024",
    },
  ];

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [size, setSize] = useState("");
  const [open, setOpen] = useState("details");

  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => String(item._id) === String(productId),
    );

    if (foundProduct) {
      setProductData(foundProduct);
      setActiveImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 text-yellow-400 text-lg">
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < Math.floor(rating) ? "★" : index < rating ? "⯨" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="w-full flex justify-center px-4 py-6 sm:px-6 lg:px-8">
        {productData ? (
          <div className="w-full md:w-[90%] lg:w-[85%] grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-3 sm:gap-4">
              {/* Small Images */}
              <div className="flex sm:flex-col flex-row gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 scrollbar-hide">
                {productData.image.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt=""
                    onClick={() => setActiveImage(item)}
                    className="w-16 h-15 sm:w-20 sm:h-18 md:w-24 md:h-23 object-cover cursor-pointer flex-shrink-0 hover:scale-105 transition"
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="w-full h-[200px] sm:h-[300px] lg:h-[400px]">
                <img
                  src={activeImage}
                  alt=""
                  className="w-full h-full object-cover rounded-lg sm:rounded-none"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col  sm:gap-1">
              {/* Name */}
              <h1 className="font-bold font-integral text-md sm:text-xl md:text-2xl break-words">
                {productData.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 flex-wrap mt-1">
                <Rating
                  name={`rating-${productData._id}`}
                  value={productData.rating}
                  precision={0.1}
                  readOnly
                  size="small"
                  className="sm:scale-100 origin-left"
                />
                <span className="text-gray-500 text-sm sm:text-sm ml-1">
                  {productData.rating}/5
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap mt-2">
                <p className="text-xl sm:text-2xl font-bold font-integral">
                  {currency}
                  {productData.price}
                </p>

                {productData.originalPrice && (
                  <p className="line-through text-gray-400 text-sm sm:text-md font-bold">
                    {currency}
                    {productData.originalPrice}
                  </p>
                )}

                {productData.discount && (
                  <p className="bg-red-100 px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-red-500">
                    {productData.discount}% OFF
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2">
                {productData.description}
              </p>

              {/* Sizes */}
              <div className="flex gap-2 flex-wrap mt-3">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`px-3 py-1 border cursor-pointer bg-LightGray h-8 flex justify-center items-center w-8 text-xs sm:text-sm transition

      ${item === size ? "border-amber-500 border-2" : "border-gray-300"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Add to Cart Button */}
              <button className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] bg-black text-white py-4 mt-6 uppercase text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors active:scale-95">
                Add to Cart
              </button>

              {/* Guarantees */}
              <div className="w-full max-w-lg mt-4">
                <hr className="border-t border-gray-200 mb-4" />
                <div className="flex flex-col space-y-2 text-gray-500 font-sans text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> 100% Original
                    product.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Cash on delivery
                    is available on this product.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Easy return and
                    exchange policy within 7 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 w-full">
            <p className="text-gray-500 text-lg">Loading product...</p>
          </div>
        )}
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center w-full mt-12 mb-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-[90%] lg:w-[85%] flex flex-col">
          <div className="border-b justify-center sm:justify-start border-gray-200 flex">
            <div className="flex items-center gap-8 sm:gap-12">
              <button
                onClick={() => setOpen("details")}
                className={`pb-4 text-sm sm:text-base font-medium cursor-pointer transition-all duration-200 border-b-2 px-1 ${
                  open === "details"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                Product Details
              </button>

              <button
                onClick={() => setOpen("reviews")}
                className={`pb-4 text-sm sm:text-base font-medium cursor-pointer transition-all duration-200 border-b-2 px-1 ${
                  open === "reviews"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                Rating & Reviews
              </button>
            </div>
          </div>

          {open === "details" ? (
            <div className="text-sm sm:text-base flex flex-col gap-6 w-full py-8 text-gray-600 leading-relaxed">
              <p>
                An e-commerce website is an online platform that facilitates the
                buying and selling of products or services over the internet. It
                serves as a virtual marketplace where businesses and individuals
                can showcase their products, interact with customers, and
                conduct transactions without the need for a physical presence.
                E-commerce websites have gained immense popularity due to their
                convenience, accessibility, and the global reach they offer.
              </p>
              <p>
                E-commerce websites typically display products or services along
                with detailed descriptions, images, prices, and any available
                variations (e.g., sizes, colors). Each product usually has its
                own dedicated page with relevant information.
              </p>
            </div>
          ) : (
            <div className="py-8">
              {/* Responsive Grid: 1 col on mobile, 2 cols on md+ screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white flex flex-col h-full hover:shadow-sm transition-shadow duration-200"
                  >
                    {/* Top row: Stars and Ellipsis */}
                    <div className="flex justify-between items-start mb-4">
                      {renderStars(review.rating)}
                      <button className="text-gray-400 hover:text-gray-600">
                        {/* Ellipsis icon placeholder */}
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                    </div>

                    {/* Name and Verified Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <h2 className="text-base sm:text-lg font-bold text-gray-900">
                        {review.name}
                      </h2>
                      {review.isVerified && (
                        <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">
                          ✓
                        </span>
                      )}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      "{review.text}"
                    </p>

                    {/* Date */}
                    <p className="text-xs sm:text-sm text-gray-400 mt-4 font-medium">
                      Posted on {review.date}
                    </p>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center mt-10">
                <button className="px-6 sm:px-8 py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors active:bg-gray-100">
                  Load More Reviews
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {productData && (
        <RelatedProducts
          category={productData.category}
          subcategory={productData.subCategory}
        />
      )}

      <NewsletterBanner/>
    </>
  );
};

export default Product;
