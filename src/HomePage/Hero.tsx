import heroImage from "../utils/images/HeroImage.png";
import SearchContent from "./SearchContent";

const Hero = () => {
  return (
    <div className="relative flex justify-center">
      <img
        src={heroImage}
        alt="heroImages"
        className="h-full w-full object-cover"
      />
      <div className="absolute flex items-center flex-col font-bold gap-12 text-xl text-white top-16 ">
        <div className="font-serif text-5xl font-dancing-script ">
          Cook Book
        </div>
        <div className="flex flex-col font-bold items-center text-xl ">
          <div className="text-3xl">Bulk or Cut?</div>
          <div>We got the perfect recipes for you</div>
        </div>
      </div>
      <SearchContent />
    </div>
  );
};

export default Hero;
