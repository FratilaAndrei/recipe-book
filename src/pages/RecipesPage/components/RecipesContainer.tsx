import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { ChangeEvent, useEffect, useState } from "react";
import SearchContent from "../../../HomePage/components/SearchContent";
import { IRecipe } from "../../../common/data/RecipeModel";
import { recipes } from "../../../data/constants/constants";
import FavoriteItem from "../../FavoritesPage/components/FavoriteItem";
import RecipeForm from "./RecipeForm";

interface filterOptions {
  filter: string;
}

const RecipesContainer = () => {
  const [recipesList, setRecipesList] = useState(recipes);
  const [selectedFilterOptions, setFilterOption] =
    useState<filterOptions | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [openForm, setOpenForm] = useState(false);

  const changeFormVisibility = () => {
    setOpenForm((prev) => !prev);
  };

  const filterOptionsData: filterOptions[] = [
    { filter: "Bulk" },
    { filter: "Cut" },
    { filter: "Calories Ascending" },
    { filter: "Calories Descending" },
  ];

  useEffect(() => {
    const filterRecipes = () => {
      let filteredRecipes = [...recipes];

      if (selectedFilterOptions) {
        if (selectedFilterOptions.filter === "Calories Ascending") {
          filteredRecipes.sort((a, b) => a.calories - b.calories);
        } else if (selectedFilterOptions.filter === "Calories Descending") {
          filteredRecipes.sort((a, b) => b.calories - a.calories);
        } else {
          filteredRecipes = recipes.filter(
            (recipe) => recipe.type === selectedFilterOptions.filter
          );
        }
      }

      if (searchQuery) {
        filteredRecipes = filteredRecipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setRecipesList(filteredRecipes);
    };

    filterRecipes();
  }, [selectedFilterOptions, searchQuery]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    handleSearchChange(e);
  };

  const handleRecipeAdd = (recipe: IRecipe) => {
    // Update the list of recipes with the new recipe
    setRecipesList([...recipesList, recipe]);
  };

  const recipeTemplate = recipesList.map((recipe: IRecipe) => {
    return (
      <Card key={recipe.id} className="w-[30%] relative">
        <div
          className={`absolute px-4 text-white rounded-sm top-0 left-0 ${
            recipe.type === "Bulk" ? "bg-red-500" : "bg-green-500"
          } `}
        >
          {recipe.type}
        </div>
        <div className="flex justify-between gap-4">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-20 shadow-lg drop-shadow-lg rounded-lg"
          />
          <div className="flex flex-col justify-around w-full text-center">
            <div className="">{recipe.name}</div>
            <div>{recipe.grams}</div>
            <div>{recipe.calories + " kcal"}</div>
            <div className="flex justify-evenly items-center">
              <div>{recipe.protein}</div>
              <div>{recipe.carbs}</div>
              <div>{recipe.fat}</div>
              <FavoriteItem />
            </div>
          </div>
          <div></div>
        </div>
      </Card>
    );
  });

  return (
    <div
      className={`p-4 gap-20 flex min-h-[90vh] items-center mt-20 w-full max-w-screen-xl mx-auto flex-col bg-slate-300`}
    >
      <div className="w-full flex my-4 justify-between">
        <Dropdown
          value={selectedFilterOptions}
          onChange={(e: DropdownChangeEvent) => setFilterOption(e.value)}
          options={filterOptionsData}
          optionLabel="filter"
          placeholder="Filter"
          className="w-[15%]"
        />
        <SearchContent
          position="absolute w-1/3 left-1/3 z-30"
          inputWidth="w-full"
          searchQuery={searchQuery}
          onChange={handleSearchChange}
          recipeFilterDropdown={false}
        />
        <Button
          label="Add"
          className="bg-green-500 px-6 text-white"
          onClick={changeFormVisibility}
        />
        {openForm && (
          <RecipeForm
            onClick={changeFormVisibility}
            onRecipeAdd={handleRecipeAdd}
          />
        )}
      </div>
      <div className="flex flex-wrap w-full gap-4 justify-start pl-20 ">
        {recipeTemplate}
      </div>
    </div>
  );
};

export default RecipesContainer;
