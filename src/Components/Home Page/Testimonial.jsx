import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      id: 2,
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      id: 3,
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      id: 4,
      name: "Moosa A.",
      review:
        "I absolutely love the premium feel and comfort of every outfit. Shop.co has become my go-to place for stylish and reliable fashion shopping.",
    },
  ];

  return (
    <div className="w-full flex justify-center py-12 sm:py-16">
      <div className="w-[85%] max-w-7xl relative">
        {/* Heading */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-integral font-extrabold">
            OUR HAPPY CUSTOMERS
          </h1>

          {/* Custom Arrows */}
          <div className="flex items-center gap-4">
            <button className="testimonial-prev text-2xl cursor-pointer">
              <div className="p-1 bg-LightGray rounded-xl hover:text-gray-400">
                <HiArrowSmLeft />
              </div>
            </button>
            <button className="testimonial-next text-2xl cursor-pointer">
              <div className=" p-1 bg-LightGray rounded-xl hover:text-gray-400">
                <HiArrowSmRight />
              </div>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border border-gray-200 rounded-2xl p-6 h-[250px] bg-white flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-yellow-400 text-lg">
                  ★★★★★
                </div>

                {/* Name */}
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="text-base font-bold">{item.name}</h2>
                  <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">
                    ✓
                  </span>
                </div>

                {/* Review */}
                <p className="text-sm text-gray-500 leading-relaxed overflow-hidden">
                  {item.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
