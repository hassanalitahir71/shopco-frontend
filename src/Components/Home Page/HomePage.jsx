import React from 'react'
import NavBar from "./NavBar";
import HeroSection from './HeroSection';
import MyStyleGrid from './MyStyleGrid';
import Testimonial from './Testimonial';
import NewsletterBanner from './NewsletterBanner';
import Footer from './Footer';
import NewArivals from './NewArivals';
import TopSelling from './TopSelling';


const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <NewArivals/>
      <TopSelling/>
      <MyStyleGrid />
      <Testimonial />
      <NewsletterBanner />
      <Footer />
    </>
  );
}

export default HomePage;