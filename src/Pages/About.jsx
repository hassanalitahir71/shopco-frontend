import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const About = () => {
  const LogoList = [
    { id: "1", img: "/img/brand1.png" },
    { id: "2", img: "/img/brand2.png" },
    { id: "3", img: "/img/brand3.png" },
    { id: "4", img: "/img/brand4.png" },
    { id: "5", img: "/img/brand5.png" },
  ];

  const sliderList = [
    { id: "1", text: "Quality Over Everything" },
    { id: "2", text: "Style Without Compromise" },
    { id: "3", text: "Curated For Every You" },
    { id: "4", text: "Fashion Forward Forever" },
    { id: "5", text: "Luxury Meets Comfort" },
  ];

  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "FOUNDER & CEO",
      bio: "Former stylist turned entrepreneur. Sarah built SHOP.CO from a single Instagram account to a global platform in under 4 years.",
      emoji: "👩‍💼",
    },
    {
      name: "James Park",
      role: "CREATIVE DIRECTOR",
      bio: "Ex-Vogue editorial designer. James shapes everything you see — from our product photography to the way the site feels.",
      emoji: "👨‍🎨",
    },
    {
      name: "Priya Sharma",
      role: "HEAD BUYER",
      bio: "With a decade in luxury retail, Priya's instincts for what customers want next are the reason our shelves are always fresh.",
      emoji: "👩‍💻",
    },
    {
      name: "Marcus Reed",
      role: "CUSTOMER EXPERIENCE",
      bio: "Marcus leads the team that turns a complaint into a loyal customer.",
      emoji: "👨‍🚀",
    },
  ];

  const commitments = [
    {
      id: "01.",
      title: (
        <>
          Uncompromising
          <br />
          Quality
        </>
      ),
      description:
        "We don't list products we wouldn't gift to a friend. Every item passes a rigorous review.",
    },
    {
      id: "02.",
      title: (
        <>
          Radical
          <br />
          Inclusivity
        </>
      ),
      description:
        "Fashion is for every body, every age, every budget, every identity.",
    },
    {
      id: "03.",
      title: (
        <>
          Thoughtful
          <br />
          Sustainability
        </>
      ),
      description:
        "We prioritize ethical brands using sustainable materials and responsible packaging.",
    },
  ];

  const stats = [
    {
      number: "200+",
      title: "Partner Brands",
      text: "Every brand is vetted for quality and ethics.",
    },
    {
      number: "2K+",
      title: "Products",
      text: "From streetwear to boardroom styles.",
    },
    {
      number: "30K+",
      title: "Happy Customers",
      text: "Customers who love how we make them feel.",
    },
    {
      number: "10+",
      title: "Years In Fashion",
      text: "A decade of understanding fashion deeply.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div className="bg-black text-white relative flex flex-col justify-between p-6 sm:p-10 lg:p-20 overflow-hidden">
          <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] border border-gray-900 rounded-full"></div>

          <div className="absolute bottom-[-250px] left-[100px] w-[600px] h-[600px] border border-gray-900 rounded-full"></div>

          <div className="relative z-10 flex flex-col gap-8">
            <p className="tracking-[8px] text-xs sm:text-sm text-[#b89d83] uppercase">
              Our Story
            </p>

            <div className="leading-none">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
                Fashion
              </h1>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
                That
              </h1>

              <h1 className="text-4xl sm:text-5xl md:text-6xl italic font-serif">
                Fits
              </h1>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
                You.
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4 relative z-10 mt-10">
            <div className="w-16 sm:w-20 h-[1px] bg-gray-700"></div>

            <p className="tracking-[5px] text-xs sm:text-sm text-gray-500 uppercase">
              Scroll
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#f5f3ef] relative flex items-center justify-center p-6 sm:p-10 lg:p-20 overflow-hidden">
          <h1 className="absolute top-6 right-6 sm:top-10 sm:right-10 text-[90px] sm:text-[120px] md:text-[180px] font-serif text-[#e9e5df] leading-none">
            ‘23
          </h1>

          <div className="max-w-md flex flex-col gap-10 relative z-10">
            <p className="text-sm sm:text-lg md:text-xl leading-8 md:leading-[50px] text-gray-900">
              We started SHOP.CO because we believed{" "}
              <span className="font-bold">
                getting dressed should feel like freedom
              </span>{" "}
              — not frustration.
            </p>

            <div className="grid grid-cols-3 gap-4 md:flex md:gap-16">
              <div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold">
                  200+
                </h2>

                <p className="tracking-[3px] text-xs sm:text-sm text-gray-500 uppercase">
                  Brands
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold">
                  2K+
                </h2>

                <p className="tracking-[3px] text-xs sm:text-sm text-gray-500 uppercase">
                  Products
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold">
                  30K+
                </h2>

                <p className="tracking-[3px] text-xs sm:text-sm text-gray-500 uppercase">
                  Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="w-full bg-black py-5 overflow-hidden border-y border-gray-800">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2.2, spaceBetween: 20 },
            640: { slidesPerView: 3.5, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          allowTouchMove={false}
          className="aboutSwiper"
        >
          {sliderList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center py-4">
                <span className="w-2 h-2 rounded-full bg-[#b89d83] mr-4"></span>

                <p className="text-gray-300 text-xs sm:text-sm md:text-base tracking-[4px] uppercase">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ABOUT */}
      <section className="w-full bg-[#f6f4f1] py-16 md:py-24">
        <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16">
          <div className="flex flex-col gap-10">
            <p className="uppercase tracking-[5px] text-xs text-gray-500">
              Chapter 01 — Origin
            </p>

            <div className="leading-none">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold">
                Built on a <span className="italic font-normal">Belief</span>
              </h1>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold mt-2">
                in Better Fashion
              </h1>
            </div>

            <p className="max-w-xl text-gray-600 text-sm sm:text-md leading-8 md:leading-[42px]">
              SHOP.CO wasn't born in a boardroom. It was born from a wardrobe
              crisis.
            </p>

            <div className="border-l-4 border-black pl-6 py-2">
              <p className="text-lg sm:text-xl md:text-2xl italic font-serif">
                "Clothes should celebrate who you are."
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="flex flex-col">
            {stats.map((item, index) => (
              <div
                key={index}
                className="py-8 border-b border-gray-300 first:pt-0"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold">
                  {item.number}
                </h2>

                <p className="uppercase tracking-[3px] text-xs text-gray-500 mt-3">
                  {item.title}
                </p>

                <p className="text-gray-600 leading-6 mt-4 text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="bg-[#0a0a0a] text-white py-16 md:py-24 px-5 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="pb-16 border-b border-neutral-800">
            <h2 className="text-4xl sm:text-5xl md:text-[4.5rem] font-serif leading-[1.1]">
              What We
              <br />
              <em className="italic text-neutral-400">Stand For</em>
            </h2>
          </div>

          <div className="flex flex-col">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[60px_1fr_1.5fr] gap-6 py-10 border-b border-neutral-800"
              >
                <span className="text-sm italic text-neutral-500">
                  {item.id}
                </span>

                <h3 className="text-2xl md:text-3xl font-serif">
                  {item.title}
                </h3>

                <p className="text-neutral-400 text-sm sm:text-base leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#f6f4f1] py-16 md:py-24 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
            The People
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif">
            Faces Behind
            <br />
            <em className="italic text-gray-400">the Label</em>
          </h2>

          <hr className="border-gray-300 my-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-3xl mb-8">
                  {member.emoji}
                </div>

                <h3 className="text-2xl font-serif mb-2">{member.name}</h3>

                <p className="text-xs tracking-[0.15em] text-gray-400 uppercase mb-6">
                  {member.role}
                </p>

                <p className="text-gray-500 text-sm leading-7">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="grid grid-cols-1 lg:grid-cols-2 w-full text-white">
        <div className="bg-black p-8 sm:p-12 md:p-16 lg:p-24">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[5.5rem] leading-none mb-12">
            Stay in
            <br />
            the
            <br />
            <span className="italic text-[#444444]">Loop.</span>
          </h2>

          <form
            className="w-full max-w-md flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-transparent border border-[#222222] p-4 w-full outline-none"
            />

            <button className="bg-white text-black text-xs tracking-widest py-4 px-8 w-fit">
              SUBSCRIBE →
            </button>
          </form>
        </div>

        <div className="bg-[#0a0a0a] p-8 sm:p-12 md:p-16 lg:p-24">
          <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl leading-[1.4] mb-8">
            "SHOP.CO didn't just upgrade my wardrobe — it changed how I feel."
          </blockquote>

          <p className="text-xs tracking-[0.15em] text-gray-500 uppercase">
            — Sarah M., Verified Customer
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
