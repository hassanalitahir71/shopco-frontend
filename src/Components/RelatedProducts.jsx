import React from 'react'
import  { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";


const RelatedProducts = ( {category, subcategory}) => {

    const{ products } = useContext(ShopContext);
    const  [ related, setRelated] = useState([]);

   useEffect(() => {
     if (products.length > 0) {
       let productCopy = products.slice();

       productCopy = productCopy.filter((item) => category === item.category);

       productCopy = productCopy.filter(
         (item) => subcategory === item.subCategory,
       );

       setRelated(productCopy.slice(0, 4));
       
     }
   }, [products, category, subcategory]);

    

   
  return (
    <>
      <div className="w-full flex justify-center py-10">
        {" "}
        <div className="w-[90%] md:w-[85%] flex flex-col gap-8 md:gap-10">
          {/* Heading */}

          <Title text={"YOU MIGHT ALSO LIKE"} />

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {related.map((item, index) => (
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
}

export default RelatedProducts
