import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { recipes } from "../data/constants/constants";

interface Recipe {
  id: string;
  name: string;
  type: string;
  protein: string;
  calories: string;
  fat: string;
  carbs: string;
  grams: string;
  image: string;
}

const LatestRecipes = recipes.slice(-3);

const RecipeCarrousel = () => {
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const recipeTemplate = (recipe: Recipe) => {
    return (
      <div className="flex justify-center items-center">
        <div className="w-1/2 h-[350px]  rounded-3xl bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <div className="h-2/3">
            <img
              src={recipe.image}
              alt=""
              className="h-full w-full p-4 rounded-[40px]"
            />
          </div>
          <div className="flex flex-col text-center gap-4">
            <div className="text-white font-bold uppercase text-2xl">
              {recipe.type}
            </div>
            <div className="line-clamp-2 text-xl font-dancing-script px-1">
              {recipe.name}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col justify-center bg-backgroundCarrousel bg-cover h-[600px]">
      <Carousel
        value={LatestRecipes}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={3000}
        itemTemplate={recipeTemplate}
        showNavigators={false}
      />
    </div>
  );
};

export default RecipeCarrousel;
