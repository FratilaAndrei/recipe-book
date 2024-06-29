import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FC, useState } from "react";
import { IRecipe } from "../../../common/data/RecipeModel";
interface Props {
  onClick: () => void;
  onRecipeAdd: (recipe: IRecipe) => void;
}
const RecipeForm: FC<Props> = ({ onClick, onRecipeAdd }) => {
  const [value, setValue] = useState<IRecipe>({
    id: 0,
    name: "",
    type: "",
    protein: "",
    calories: 0,
    fat: "",
    carbs: "",
    grams: "",
    image: "",
    isFavored: false,
  });
  const inputClass = "pl-4 py-2";

  //   const showRecipeAdded = () => {
  //     setValue({
  //       id: 20,
  //       name: value.name,
  //       type: value.type,
  //       protein: value.protein,
  //       calories: value.calories,
  //       fat: value.fat,
  //       carbs: value.carbs,
  //       grams: value.grams,
  //       image: value.image,
  //     });
  //     console.log(value);
  //   };

  const recipeAdded = () => {
    // Pass the recipe object to the parent component

    if (
      !value.name ||
      !value.calories ||
      !value.carbs ||
      !value.grams ||
      !value.protein ||
      !value.fat
    )
      return;

    onRecipeAdd(value);
    console.log(value);
  };

  return (
    <form className="absolute card z-50 w-1/2 h-2/3 top-1/2 left-0 -translate-y-1/2 translate-x-1/2 bg-slate-200 ">
      <Button label="Close" className="bg-red-500 m-4 p-2" onClick={onClick} />
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
            placeholder="Protein Count"
            className={`${inputClass}`}
            value={value.protein}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, protein: e.target.value })
            }
          />
          <InputText
            keyfilter="int"
            placeholder="Carbs Count"
            className={`${inputClass}`}
            value={value.carbs}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, carbs: e.target.value })
            }
          />
          <InputText
            keyfilter="int"
            placeholder="Fat Count"
            className="pl-4"
            value={value.fat}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, fat: e.target.value })
            }
          />
        </div>
        <InputText
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
        <div onClick={recipeAdded} className="bg-blue-400 px-6 py-2 rounded-lg">
          Button
        </div>
      </div>
    </form>
  );
};

export default RecipeForm;
