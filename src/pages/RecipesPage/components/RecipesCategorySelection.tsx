import RecipeCategory from "./RecipeCategory";

const RecipesCategorySelection = () => {
  return (
    <div className="flex flex-wrap w-full h-[90vh] text-white ">
      <RecipeCategory title="Cut" image="backgroundCarrousel" />
      <RecipeCategory title="Bulk" image="tdeeBackground" />
      <RecipeCategory title="See all recipes" image="" />
    </div>
  );
};

export default RecipesCategorySelection;
