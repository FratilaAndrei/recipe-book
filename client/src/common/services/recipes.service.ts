import axios from "axios";
import BolognesePic from "../../utils/images/bolognesePic.jpg";
import { IRecipe, RecipePostDTO } from "../data/RecipeModel";


export const getRecipesFromBackend = async () => {
    const res = await axios<IRecipe[]>("http://localhost:5288/api/recipes", {
      method: "GET",
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "x-www-form-urlencoded",
      },
    });

    const data = res.data;

    // Add image to backend data since there's no saved image there
    const mappedData:IRecipe[] = data.map((data) => {
      return {
        ...data,
        image: BolognesePic,
      };
    });

    return mappedData;
  };

export const getFavoriteRecipesFromBackend = async () => {
    const res = await axios<IRecipe[]>("http://localhost:5288/api/recipes/favorite", {
        method: "GET",
        withCredentials: false,
        headers: {
          Accept: "application/json",
          "Content-Type": "x-www-form-urlencoded",
        },
      });
  
      const data = res.data;
  
      // Add image to backend data since there's no saved image there
      const mappedData:IRecipe[] = data.map((data) => {
        return {
          ...data,
          image: BolognesePic,
        };
      });
  
      return mappedData;
}

export const toggleFavoriteRecipe = async (id:string) => {
    const res = await axios(`http://localhost:5288/api/recipes/${id}`, {
        method: "PUT",
        withCredentials: false,
        headers: {
          Accept: "application/json",
          "Content-Type": "x-www-form-urlencoded",
        },
      });

      if(res.status !== 200) throw new Error("Not working favorite");
}

export const getRecipeById = async (id:string) => {
  const res = await axios<IRecipe>(`http://localhost:5288/api/recipes/${id}`, {
    method: "GET",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "x-www-form-urlencoded",
    },
  });

  const data = res.data;

  return data;
}

export const addRecipe = async (recipe: RecipePostDTO) => {
  const res = await axios("http://localhost:5288/api/recipes", {
    method: "POST",
    withCredentials: false,
    headers: {
      Accept: "application/json",
    },
    data: recipe,
  });

  if(res.status !== 201) throw new Error("Not working post");
}

// avem aceiasi poza peste tot pentru ca era foarte complex procesul de a folosi un serviciu de tip bucket storage ( bucket storage = stocheaza fisiere ), precum AWS S3 sau Cloudflare R2 pentru a stoca imagini