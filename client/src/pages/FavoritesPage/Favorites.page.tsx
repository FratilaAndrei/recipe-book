import { Card } from "primereact/card";
import { useLayoutEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import { IRecipe } from "../../common/data/RecipeModel";
import { getFavoriteRecipesFromBackend } from "../../common/services/recipes.service";

const FavoritesPage = () => {
  const [recipeList, setRecipeList] = useState<IRecipe[]>([]);

  const favoredRecipes = recipeList.filter((recipe) => recipe.isFavored);

  useLayoutEffect(() => {
    getFavoriteRecipesFromBackend().then((data) => setRecipeList(data));
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="m-auto w-1/2">
        <div className="flex flex-wrap gap-4 justify-center">
          {favoredRecipes.length ? (
            favoredRecipes.map((recipe) => (
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
            ))
          ) : (
            <div className="text-2xl font-medium">No favored recipes</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
