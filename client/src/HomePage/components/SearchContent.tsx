import { ChangeEvent, FC, useLayoutEffect, useState } from "react";
import { IRecipe } from "../../common/data/RecipeModel";
import { getRecipesFromBackend } from "../../common/services/recipes.service";

interface Props {
  position: string;
  inputWidth: string;
  recipeFilterDropdown: boolean;
  searchQuery?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchContent: FC<Props> = ({
  position,
  inputWidth,
  recipeFilterDropdown,
  searchQuery,
  onChange,
}) => {
  const [searchResult, setSearchResult] = useState(false);
  const [searchedRecipe, setSelectedRecipe] = useState("");
  const [recipesList, setRecipesList] = useState<IRecipe[]>([]);

  const filteredRecipe = recipesList.filter((recipes) =>
    recipes.name.toLowerCase().includes(searchedRecipe.toLowerCase())
  );

  const recipeFound = filteredRecipe.map((recipes) => {
    return (
      <div
        className="flex gap-2 p-2 text-sm border border-t-2 items-center"
        key={recipes.id}
      >
        <img
          src={recipes.image}
          alt="pozaMancare"
          className="h-10 w-8 rounded-md"
        />
        <div className="w-1/2">{recipes.name}</div>
        <div>{recipes.calories}</div>
        <div>{recipes.protein}</div>
        <div>{recipes.carbs}</div>
        <div>{recipes.fat}</div>
      </div>
    );
  });

  const isSearching = () => {
    setSearchResult(true);
  };

  const searchingRecipe = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRecipe(e.target.value);
  };

  useLayoutEffect(() => {
    getRecipesFromBackend().then((data) => setRecipesList(data));
  }, []);

  return (
    <div className={position}>
      <input
        type="text"
        className={`h-8 2xl:h-10 outline-none text-black ${inputWidth} ${
          searchedRecipe ? "rounded-none rounded-t-xl" : "rounded-xl"
        }  pl-4`}
        onClick={isSearching}
        value={searchQuery}
        onChange={recipeFilterDropdown ? searchingRecipe : onChange}
      />
      {searchResult && searchedRecipe ? (
        <div className={`bg-white h-fit rounded-b-xl ${inputWidth}`}>
          {recipeFound}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchContent;
