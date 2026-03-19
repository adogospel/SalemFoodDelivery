import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedDishes from "./components/FeaturedDishes";
import MenuSection from "./components/MenuSection";
import WhyChooseUs from "./components/WhyChooseUs";
import DeliveryInfo from "./components/DeliveryInfo";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedDishes />
      <MenuSection />
      <WhyChooseUs />
      <DeliveryInfo />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}