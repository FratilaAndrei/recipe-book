import { InputText } from "primereact/inputtext";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { IRecipe, RecipePostDTO } from "../../../common/data/RecipeModel";
import {
  addRecipe,
  getRecipesFromBackend,
} from "../../../common/services/recipes.service";
interface Props {
  setRecipesList: Dispatch<SetStateAction<IRecipe[]>>;
  closeForm: () => void;
}
const RecipeForm: FC<Props> = ({ setRecipesList, closeForm }) => {
  const [value, setValue] = useState<IRecipe>({
    id: "",
    name: "",
    type: "",
    protein: "",
    calories: 0,
    fat: "",
    carbs: "",
    grams: "",
    isFavored: false,
    image: "",
  });
  const inputClass = "pl-4 py-2";

  const recipeAdded = () => {
    if (
      !value.name ||
      !value.calories ||
      !value.carbs ||
      !value.grams ||
      !value.protein ||
      !value.fat
    )
      return;

    handleAddRecipe({
      calories: +value.calories,
      carbs: parseInt(value.carbs),
      fat: parseInt(value.fat),
      grams: parseInt(value.grams),
      name: value.name,
      protein: parseInt(value.protein),
      type: value.type,
      isFavored: false,
    });
  };

  const handleAddRecipe = async (recipeValues: RecipePostDTO) => {
    await addRecipe(recipeValues);

    getRecipesFromBackend().then((data) => {
      closeForm();

      setRecipesList(data);
    });
  };

  return (
    <form className="absolute card z-50 w-1/2 h-2/3 top-1/2 left-0 -translate-y-1/2 translate-x-1/2 bg-slate-200 ">
      <div className="flex flex-col m-auto w-1/2 gap-4 justify-center items-center">
        <InputText
          value={value.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, name: e.target.value })
          }
          placeholder="Recipe Name"
          className={`${inputClass}`}
        />
        <InputText
          keyfilter="int"
          type="number"
          min={0}
          placeholder="Grams per Portion"
          className={`${inputClass}`}
          value={value.grams}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, grams: e.target.value })
          }
        />
        <div className="flex gap-2">
          <InputText
            keyfilter="int"
            type="number"
            min={0}
            placeholder="Protein Count"
            className={`${inputClass}`}
            value={value.protein}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, protein: e.target.value })
            }
          />
          <InputText
            keyfilter="int"
            type="number"
            min={0}
            placeholder="Carbs Count"
            className={`${inputClass}`}
            value={value.carbs}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, carbs: e.target.value })
            }
          />
          <InputText
            keyfilter="int"
            type="number"
            min={0}
            placeholder="Fat Count"
            className="pl-4"
            value={value.fat}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, fat: e.target.value })
            }
          />
        </div>
        <InputText
          type="number"
          min={0}
          keyfilter="int"
          placeholder="Calorie Count"
          className={`${inputClass}`}
          value={value.calories}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, calories: e.target.value })
          }
        />
        <InputText
          value={value.type}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, type: e.target.value })
          }
          placeholder="Recipe Type"
          className={`${inputClass}`}
        />
        <div
          onClick={recipeAdded}
          className="bg-green-400 px-6 py-2 rounded-lg cursor-pointer text-white font-medium"
        >
          Add Recipe
        </div>
      </div>
    </form>
  );
};

export default RecipeForm;
