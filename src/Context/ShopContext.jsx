import { createContext, useState } from "react";
import { products } from "../assets/assets";


export const ShopContext = createContext();
const ShopContextProvider =(props) =>{

    const currency = '$';
    const delivery_fee = 10;
    const [searchTerm, setSearchTerm] = useState("");
    const value = {
      products,
      currency,
      delivery_fee,
      searchTerm,
      setSearchTerm,
    };
    return(
        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )
 }
 export default ShopContextProvider;