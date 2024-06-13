import { Card } from "primereact/card";
import { useState } from "react";
import Navbar from "../../common/Navbar";
import { IRecipe } from "../../common/data/RecipeModel";
import { recipes } from "../../data/constants/constants";
import FavoriteItem from "./components/FavoriteItem";

const FavoritesPage = () => {
  const [recipeList, setRecipeList] = useState<IRecipe[]>(recipes);

  const toggleFavorite = (id: number) => {
    setRecipeList((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavored: !recipe.isFavored } : recipe
      )
    );
  };

  const favoredRecipes = recipes.filter((recipe) => recipe.isFavored);

  return (
    <div className="">
      <Navbar />
      <div className="m-auto w-1/2">
        <FavoriteItem onToggleFavorite={toggleFavorite} />
        <div className="flex flex-wrap gap-4 justify-center">
          {favoredRecipes.map((recipe) => (
            <Card key={recipe.id} className="w-1/3">
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-white p-1 rounded">
                  {recipe.type}
                </div>
              </div>
              <div className="p-2">
                <h2 className="text-lg font-bold">{recipe.name}</h2>
                <p>Protein: {recipe.protein}</p>
                <p>Carbs: {recipe.carbs}</p>
                <p>Fat: {recipe.fat}</p>
                <p>Calories: {recipe.calories}</p>
                <p>Grams: {recipe.grams}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
