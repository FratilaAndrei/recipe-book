import Navbar from "../common/Navbar";
import HomeFooter from "./components/Footer/HomeFooter";
import Hero from "./components/Hero";
import RecipeCarrousel from "./components/RecipeCarrousel";
import TdeeCalculator from "./components/TdeeCalculator/TdeeCalculator";

const HomePage = () => {
  return (
    <div className="relative bg-backgroundCarrousel bg-cover">
      <Navbar />
      <Hero />
      {/* <RecipeCarrousel /> */}
      <RecipeCarrousel />
      <TdeeCalculator />
      <HomeFooter />
    </div>
  );
};

export default HomePage;
