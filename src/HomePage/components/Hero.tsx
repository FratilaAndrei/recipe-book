import SearchContent from "./SearchContent";

const Hero = () => {
  return (
    <div className=" flex flex-col h-[1000px] 2xl:gap-y-20">
      <div className="flex items-center justify-start mt-20 flex-col h-screen gap-12 text-xl top-16 lg:top-[15%] ">
        <div className="font-serif text-5xl lg:text-6xl font-dancing-script font-bold text-white ">
          Cook Book
        </div>
        <div className="flex flex-col font-bold items-center text-xl lg:gap-6 text-white ">
          <div className="text-3xl lg:text-4xl">Bulk or Cut?</div>
          <div className="lg:text-2xl">We got the perfect recipes for you</div>
        </div>
      </div>
      <SearchContent
        position="top-96 absolute 2xl:top-[400px] mt-4 w-3/4 flex justify-center items-center lg:w-full flex-col"
        inputWidth="2xl:w-1/3 lg:w-1/2"
        recipeFilterDropdown={true}
      />
    </div>
  );
};

export default Hero;
