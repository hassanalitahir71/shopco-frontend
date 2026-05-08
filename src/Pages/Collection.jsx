import React, { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  // Context
  const { products, searchTerm } = useContext(ShopContext);

  // States
  const [FilterProducts, setfilterProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [catagory, setcatagory] = useState([]);
  const [subcatagory, setsubcatagory] = useState([]);
const [sortType, setSortType] = useState("");

  const productsPerPage = 20;

  // Toggle Category
  const togglecatagory = (e) => {
    if (catagory.includes(e.target.value)) {
      setcatagory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcatagory((prev) => [...prev, e.target.value]);
    }
  };

  // Toggle Sub Category
  const ToggleSubCatagory = (e) => {
    if (subcatagory.includes(e.target.value)) {
      setsubcatagory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubcatagory((prev) => [...prev, e.target.value]);
    }
  };

  // Apply Filters
  const ApplyFunction = () => {
    let productCopy = products.slice();

    // Category Filter
    if (catagory.length > 0) {
      productCopy = productCopy.filter((item) =>
        catagory.includes(item.category),
      );
    }
      //  search logic
     if (searchTerm.trim() !== "") {
       productCopy = productCopy.filter((item) =>
         item.name.toLowerCase().includes(searchTerm.toLowerCase()),
       );
     }

    // Sub Category Filter
    if (subcatagory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subcatagory.includes(item.subCategory),
      );
    }

    setfilterProducts(productCopy);
  };

  // Initial Products Load
  useEffect(() => {
    setfilterProducts(products);
    setCurrentPage(1);
  }, [products]);

  // Apply Filters When State Changes
  useEffect(() => {
    ApplyFunction();
  }, [catagory, subcatagory, searchTerm]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = FilterProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(FilterProducts.length / productsPerPage);

  // prices logic

  const sortProduct =()=>{

    let fpCopy = FilterProducts.slice();

    switch (sortType) {
      case "low-high":
        setfilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setfilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        ApplyFunction();
        break;
        
    }


  }
  useEffect(()=>{
sortProduct();

  },[sortType])

  return (
    <div className="w-full flex justify-center mt-10 mb-10">
      <div className="w-[90%] lg:w-[85%] flex flex-col lg:flex-row gap-5">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden w-full border border-gray-400 rounded-md p-2 text-sm font-integral font-bold"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Filters */}
        <div
          className={`${showFilters ? "flex" : "hidden"}
          lg:flex w-full lg:w-[20%] gap-2 flex-col`}
        >
          <p className="font-integral text-lg pl-1 font-bold">FILTERS</p>

          {/* Categories */}
          <div className="p-3 flex flex-col border-gray-400 border gap-1 font-integral text-sm">
            <p>CATAGORIES</p>

            <label>
              <input
                onChange={togglecatagory}
                className="text-gray-600 mr-2"
                type="checkbox"
                value="Men"
              />
              Men
            </label>

            <label>
              <input
                onChange={togglecatagory}
                className="text-gray-600 mr-2"
                type="checkbox"
                value="Women"
              />
              Women
            </label>

            <label>
              <input
                onChange={togglecatagory}
                className="text-gray-600 mr-2"
                type="checkbox"
                value="Kids"
              />
              Kids
            </label>
          </div>

          {/* Type */}
          <div className="p-3 flex flex-col border-gray-400 border gap-1 font-integral text-sm">
            <p>TYPE</p>

            <label>
              <input
                onChange={ToggleSubCatagory}
                className="text-gray-600 mr-2"
                type="checkbox"
                value="Topwear"
              />
              Top Wear
            </label>

            <label>
              <input
                onChange={ToggleSubCatagory}
                className="text-gray-600 mr-2"
                type="checkbox"
                value="Bottomwear"
              />
              Bottom Wear
            </label>

            <label>
              <input
                onChange={ToggleSubCatagory}
                className="text-gray-600 mr-2"
                type="checkbox"
                value="Winterwear"
              />
              Winter Wear
            </label>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-[80%] gap-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <Title text="COLLECTION" />

            <select onChange={ (e) => setSortType(e.target.value)} className="w-full sm:w-auto p-1 pl-2 pr-8 text-sm border border-gray-500 text-gray-500 rounded-md bg-white">
              <option value="relevant">Sorted by: Relevant</option>

              <option value="low-high">Sorted by: Low to High</option>

              <option value="high-low">Sorted by: High to Low</option>
            </select>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {currentProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                originalPrice={item.originalPrice}
                discount={item.discount}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-md text-sm disabled:opacity-40"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md text-sm border ${
                    currentPage === page
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-md text-sm disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
