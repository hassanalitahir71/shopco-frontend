import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const About = () => {
   const sliderList = [
     { id: "1", text: " Quality Over Everythind" },
     { id: "2", text: " styled Without Compromised" },
     { id: "3", text: " Curated For Every You" },
     { id: "4", text: " Fashion Farword For Always" },
     { id: "5", text: " Wear Your Story" },
   ];
  return (
    <>
      <div className="w-full h-125 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Section */}
        <div className="bg-black text-white relative flex flex-col justify-between p-10 lg:p-20 overflow-hidden">
          {/* Circle Background */}
          <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] border border-gray-900 rounded-full"></div>

          <div className="absolute bottom-[-250px] left-[100px] w-[600px] h-[600px] border border-gray-900 rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-8">
            {/* Small Text */}
            <p className="tracking-[8px] text-sm text-[#b89d83] uppercase">
              Our Story
            </p>

            {/* Main Heading */}
            <div className="leading-none">
              <h1 className="text-5xl md:text-6xl font-serif font-bold">
                Fashion
              </h1>

              <h1 className="text-5xl md:text-6xl font-serif font-bold">
                That
              </h1>

              <h1 className="text-5xl md:text-6xl italic font-serif">Fits</h1>

              <h1 className="text-5xl md:text-6xl font-serif font-bold">
                You.
              </h1>
            </div>
          </div>

          {/* Scroll */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-20 h-[1px] bg-gray-700"></div>

            <p className="tracking-[6px] text-sm text-gray-500 uppercase">
              Scroll
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#f5f3ef] relative flex items-center justify-center p-10 lg:p-20 overflow-hidden">
          {/* Background Number */}
          <h1 className="absolute top-10 right-10 text-[180px] font-serif text-[#e9e5df] leading-none">
            ‘23
          </h1>

          {/* Text Content */}
          <div className="max-w-md  flex flex-col gap-10 font-integral relative z-10">
            <p className="text-md md:text-xl flex flex-col justify-start leading-[50px] text-gray-900">
              We started SHOP.CO because we believed{" "}
              <span className="font-bold">
                getting dressed should feel like freedom
              </span>{" "}
              — not frustration. Today, over 30,000 customers worldwide trust us
              with their wardrobes.
            </p>

            {/* Stats */}
            <div className="flex gap-10 md:gap-16">
              <div>
                <h2 className="text-5xl font-serif font-bold">200+</h2>

                <p className="tracking-[3px] text-sm text-gray-500 uppercase">
                  Brands
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-serif font-bold">2K+</h2>

                <p className="tracking-[3px] text-sm text-gray-500 uppercase">
                  Products
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-serif font-bold">30K+</h2>

                <p className="tracking-[3px] text-sm text-gray-500 uppercase">
                  Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="w-full bg-black py-4 sm:py-2">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          allowTouchMove={true}
          className="logoSwiper"
        >
          {sliderList.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <div className="flex justify-center p-4 sm:p-8 items-center h-full">
                <p className="text-gray-300 text-sm sm:text-base tracking-[3px] uppercase">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default About
