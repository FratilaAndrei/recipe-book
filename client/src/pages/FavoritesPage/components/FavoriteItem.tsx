import { Dispatch, FC, SetStateAction } from "react";
import { BiHeart } from "react-icons/bi";
import { IRecipe } from "../../../common/data/RecipeModel";
import {
  getRecipesFromBackend,
  toggleFavoriteRecipe,
} from "../../../common/services/recipes.service";

interface Props {
  id: string;
  isFavored: boolean;
  setRecipesList: Dispatch<SetStateAction<IRecipe[]>>;
}

const FavoriteItem: FC<Props> = ({ id, setRecipesList, isFavored }) => {
  const handleFavorite = async () => {
    await toggleFavoriteRecipe(id);

    // this refetches data
    getRecipesFromBackend().then((data) => setRecipesList(data));
  };

  return (
    <div
      className={`cursor-pointer text-2xl rounded-full ${
        isFavored ? "text-green-500" : "text-red-500"
      }`}
      onClick={handleFavorite}
    >
      <BiHeart />
    </div>
  );
};

export default FavoriteItem;
