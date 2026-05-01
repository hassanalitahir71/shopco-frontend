import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = () => {
  const LogoList = [
    { id: "1", img: "/img/brand1.png" },
    { id: "2", img: "/img/brand2.png" },
    { id: "3", img: "/img/brand3.png" },
    { id: "4", img: "/img/brand4.png" },
    { id: "5", img: "/img/brand5.png" },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="bg-[#F2F0F1] w-full flex justify-center h-auto lg:h-125 items-center pt-8 lg:pt-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between h-full w-[90%] lg:w-[85%] items-center gap-10 lg:gap-0 mt-4 lg:mt-0">
          {/* Text Content */}
          <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-1/2">
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold font-integral leading-[1.1] lg:leading-tight">
                FIND CLOTHES <br />
                THAT MATCHES <br />
                YOUR STYLE
              </h1>
              <p className="text-xsm lg:text-base font-integral text-mist-400 text-black/60">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="flex justify-center items-center w-full lg:w-auto lg:self-start text-LightGray bg-black1 px-9 py-4 lg:py-3 font-integral text-md rounded-4xl hover:bg-amber-50 hover:text-black hover:shadow-2xl cursor-pointer">
                Shop Now
              </button>
            </div>

            {/* Stats Block (Responsive Wrap) */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start font-integral w-full gap-y-6">
              <div className="flex flex-col w-1/2 lg:w-auto pr-4 lg:px-10 border-r-2 border-gray-300">
                <h1 className="text-1xl lg:text-2xl font-bold">200+</h1>
                <p className="text-xs sm:text-sm text-gray-500">
                  International Brands
                </p>
              </div>

              <div className="flex flex-col w-1/2 lg:w-auto pl-4 lg:px-10 lg:border-r-2 border-gray-300">
                <h1 className="text-1xl lg:text-2xl font-bold">2,000+</h1>
                <p className="text-xs sm:text-sm text-gray-500">
                  High-Quality Products
                </p>
              </div>

              <div className="flex flex-col w-full lg:w-auto items-center lg:items-center lg:px-10 mt-2 lg:mt-0">
                <h1 className="text-1xl lg:text-2xl font-bold">30,000+</h1>
                <p className="text-xs sm:text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 h-full flex justify-center lg:justify-end items-end">
            <img
              src="/img/Heropic1.png"
              alt="Models wearing clothes"
              className="w-full object-cover lg:w-auto lg:h-full"
            />
          </div>
        </div>
      </div>

      {/* --- SLIDER SECTION --- */}
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
          {[...LogoList, ...LogoList].map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <div className="flex justify-center p-4 sm:p-8 items-center h-full">
                <img
                  src={item.img}
                  alt={`brand-${item.id}`}
                  className="max-h-5 sm:max-h-8 object-contain filter invert brightness-0"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HeroSection;
