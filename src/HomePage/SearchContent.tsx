import { useState } from "react";
import { recipes } from "../data/constants/Recipes";

const SearchContent = () => {
  const [searchResult, setSearchResult] = useState(false);
  const [searchedRecipe, setSelectedRecipe] = useState("");

  const isSearching = () => {
    setSearchResult(true);
  };

  const searchingRecipe = (e: any) => {
    setSelectedRecipe(e.target.value);
  };

  const filteredRecipe = recipes.filter((recipes) =>
    recipes.name.toLowerCase().includes(searchedRecipe.toLowerCase())
  );
  // Facem un Filtru care ne aduce doar retetele in numele carora se regaseste ceea ce caut prin search

  const recipeFound = filteredRecipe.map((recipes) => {
    return (
      <div className="flex gap-2 p-2 text-sm" key={recipes.id}>
        <div className="w-1/2">{recipes.name}</div>
        <div>{recipes.calories}</div>
        <div>{recipes.protein}</div>
        <div>{recipes.carbs}</div>
        <div>{recipes.fat}</div>
      </div>
    );
  });

  return (
    <div className="absolute top-1/3 mt-4 w-3/4 flex justify-center flex-col">
      <input
        type="text"
        className={`h-8 outline-none ${
          searchedRecipe ? "rounded-none rounded-t-xl" : "rounded-xl"
        }  pl-4`}
        onClick={isSearching}
        onChange={searchingRecipe}
      />
      {searchResult && searchedRecipe ? (
        // searchedRecipe deoarece este inputul dupa care cautam
        <div className="bg-white h-fit rounded-b-xl">{recipeFound}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchContent;
