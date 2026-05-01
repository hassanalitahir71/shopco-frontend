import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import NewArivals from "../Components/NewArivals";
import TopSelling from "../Components/TopSelling";
import MyStyleGrid from "../Components/MyStyleGrid";
import Testimonial from "../Components/Testimonial";
import NewsletterBanner from "../Components/NewsletterBanner";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <NewArivals />
      <TopSelling />
      <MyStyleGrid />
      <Testimonial />
      <NewsletterBanner />
      <Footer />
    </>
  );
};

export default HomePage;
