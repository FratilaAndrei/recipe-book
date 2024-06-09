import { useState } from "react";
import { IoManSharp, IoWomanSharp } from "react-icons/io5";

interface Props {
  title: string;
  placeholder?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (
    gender: "male" | "female",
    genderSelected: "maleGenderSelected" | "femaleGenderSelected"
  ) => void;
}

const BodyInformation: React.FC<Props> = ({
  title,
  onChange,
  placeholder,
  onClick,
}) => {
  const [maleGenderSelected, setMaleGenderSelected] = useState("text-white");
  const [femaleGenderSelected, setFemaleGenderSelected] =
    useState("text-white");
  const changeGenderHandler = (gender: "male" | "female") => {
    if (gender === "male") {
      setMaleGenderSelected("text-red-800");
      setFemaleGenderSelected("text-white");
    } else {
      setFemaleGenderSelected("text-red-800");
      setMaleGenderSelected("text-white");
    }
    onClick &&
      onClick(
        gender,
        gender === "male" ? "maleGenderSelected" : "femaleGenderSelected"
      );
  };

  return (
    <div className="bg-gray-900 bg-opacity-10 h-32 w-[48%] lg:w-[35%] text-center gap-4 rounded-xl md:w-3/4  bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-400">
      <div
        className={`text-2xl text-white ${
          title === "Gender" ? "mt-2" : "mt-4"
        } `}
      >
        {title}
      </div>
      {title !== "Gender" && (
        <input
          type="number"
          className="mx-4 text-slate-700 outline-none pl-2 w-12 mt-6 rounded-lg"
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      )}
      {title === "Gender" && (
        <div className="flex items-center justify-center gap-8 pt-2 text-6xl">
          <IoManSharp
            className={`lg:hover:text-red-300 ${maleGenderSelected} `}
            onClick={() => {
              onClick && changeGenderHandler("male");
            }}
          />
          <IoWomanSharp
            className={`lg:hover:text-red-300 ${femaleGenderSelected} `}
            onClick={() => {
              onClick && changeGenderHandler("female");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BodyInformation;
