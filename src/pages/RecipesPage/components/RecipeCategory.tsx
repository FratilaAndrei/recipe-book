interface Props {
  title: string;
  image: string;
}

const RecipeCategory: React.FC<Props> = ({ title, image }) => {
  return (
    <div
      className={`bg-black w-full h-1/3 text-2xl flex items-center justify-center bg-${image} bg-cover xl:hover:scale-110`}
    >
      {title}
    </div>
  );
};

export default RecipeCategory;
