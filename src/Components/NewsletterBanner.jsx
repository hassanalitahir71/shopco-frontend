import React from "react";
import { FiMail } from "react-icons/fi";

const NewsletterBanner = () => {
  return (
    
      <div className="w-full flex justify-center px-4 md:px-0 py-10">
        <div className="bg-black rounded-3xl   w-[85%] max-w-[1240px] px-6 py-8 md:px-16 md:py-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          {/* Left Side: Heading */}
          <h2 className="text-white text-3xl md:text-[35px] font-black uppercase leading-tight w-full md:w-[60%] text-center md:text-left font-integral">
            STAY UPTO DATE ABOUT <br className="hidden lg:block" /> OUR LATEST
            OFFERS
          </h2>

          {/* Right Side: Form Inputs */}
          <div className="flex flex-col gap-3 w-full md:w-[350px]">
            {/* Email Input */}
            <div className="flex items-center bg-white rounded-full px-4 h-12">
              {/* Mail Icon */}
              <FiMail
                className="w-5 h-5 text-gray-400 mr-3 shrink-0"
                
                />
              
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent outline-none text-sm text-black placeholder-gray-400"
              />
            </div>

            {/* Subscribe Button */}
            <button className="bg-white text-black text-sm font-medium rounded-full h-12 w-full hover:bg-gray-200 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default NewsletterBanner;
