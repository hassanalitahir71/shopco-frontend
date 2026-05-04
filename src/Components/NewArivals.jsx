import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import {useEffect, useState} from "react";
import ProductItem from "./ProductItem";


const NewArivals = () => {
  const { products } = useContext(ShopContext);
 
  const [latestProducts, setlatestProducts]= useState([]);
 useEffect(() => {
   
 setlatestProducts(products.slice(0,4));
   
 }, [])
 
  return (
    <>
      <div className="w-full flex justify-center py-10">
        {" "}
        <div className="w-[90%] md:w-[85%] flex flex-col gap-8 md:gap-10">
          {/* Heading */}

          <Title text={"NEW ARRIVALS"} />

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {latestProducts.map((item, index) => (
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
        </div>
      </div>
    </>
  );
};

export default NewArivals;

