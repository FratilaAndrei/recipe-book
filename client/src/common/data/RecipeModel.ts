export interface IRecipe {
    id: string,
    name: string,
    type: string,
    protein: string,
    calories: number,
    fat: string,
    carbs: string,
    grams: string,
    image : string,
    isFavored : boolean,
}

export type RecipePostDTO = {
    name: string,
    type: string,
    protein: number,
    calories: number,
    fat: number,
    carbs: number,
    grams: number,
    isFavored : boolean,
}