import Navbar from "../../common/Navbar";
import RecipesContainer from "./components/RecipesContainer";

const RecipesPage = () => {
  return (
    <div className="bg-tdeeBackground bg-contain w-full h-full">
      <Navbar />
      <RecipesContainer />
    </div>
  );
};

export default RecipesPage;
