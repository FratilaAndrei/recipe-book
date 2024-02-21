import heroImage from "../utils/images/HeroImage.png";

const Hero = () => {
  return (
    <div className="relative flex justify-center">
      <img
        src={heroImage}
        alt="heroImages"
        className="h-full w-full object-cover"
      />
      <div className="absolute flex items-center flex-col font-bold gap-12 text-xl text-white top-16 ">
        <div className="font-serif text-5xl dancing-script ">Cook Book</div>
        <div className="flex flex-col font-bold items-center ">
          <div>Bulk or Cut?</div>
          <div>We got the perfect recipes for you</div>
        </div>
      </div>
      <input
        type="text"
        className=" h-8 outline-none rounded-xl pl-4 absolute top-1/3 w-2/3"
      />
    </div>
  );
};

export default Hero;
