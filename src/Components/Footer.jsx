import React from "react";
import { IoLogoGithub, IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] pt-16 pb-8 px-4 font-integral md:px-0">
      <div className="max-w-[85%] mx-auto">
        {/* Top Section: Links & Info */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-8 md:gap-8 mb-12">
          {/* Brand Info (Spans 2 columns on mobile and desktop) */}
          <div className="col-span-2 pr-4">
            <h1 className="text-3xl md:text-4xl font-extrabold font-integral uppercase mb-4">
              SHOP.CO
            </h1>
            <p className="text-sm text-gray-500 mb-6 max-w-sm leading-relaxed">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {/* Twitter */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 bg-white flex justify-center items-center hover:bg-black hover:text-white transition-colors"
              ><FaTwitter className=""/></a>
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 bg-white flex justify-center items-center hover:bg-black hover:text-white transition-colors"
              >
                <IoLogoFacebook className="text-2xl" />
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 bg-white flex justify-center items-center hover:bg-black hover:text-white transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              {/* GitHub */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 bg-white flex justify-center items-center hover:bg-black hover:text-white transition-colors"
              >
                <IoLogoGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="col-span-1">
            <h3 className="font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div className="col-span-1">
            <h3 className="font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
              Help
            </h3>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-black">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="col-span-1">
            <h3 className="font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
              FAQ
            </h3>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-black">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="col-span-1">
            <h3 className="font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-black">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment Badges */}
          <div className="flex gap-2">
           
              <img
                src="/img/visa.png"
                alt="Visa"
                className=""
              />
            
           
              <img
                src="/img/master.png"
                alt="Mastercard"
                className="h-full object-contain"
              />
            
              <img
                src="/img/paypal.png"
                alt="PayPal"
                className="h-full object-contain"
              />
           
              <img
                src="/img/applepay.png"
                alt="Apple Pay"
                className="h-full object-contain"
              />
           
              <img
                src="/img/googlepay.png"
                alt="Google Pay"
                className="h-full object-contain"
              />
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
