import Navbar from "../common/Navbar";
import Hero from "./Hero";
import RecipeCarrousel from "./RecipeCarrousel";
import TdeeCalculator from "./components/TdeeCalculator/TdeeCalculator";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecipeCarrousel />
      <TdeeCalculator />
    </>
  );
};

export default HomePage;
