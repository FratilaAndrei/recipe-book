import Navbar from "../common/Navbar";
import Hero from "./Hero";
import RecipeCarrousel from "./RecipeCarrousel";
import HomeFooter from "./components/Footer/HomeFooter";
import TdeeCalculator from "./components/TdeeCalculator/TdeeCalculator";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecipeCarrousel />
      <TdeeCalculator />
      <HomeFooter />
    </>
  );
};

export default HomePage;
