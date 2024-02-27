import { useState } from "react";
import { bodyInformationInput } from "../data/models/TdeeCalcModel";
import BodyInformation from "./BodyInformation";

const TdeeCalculator = () => {
  const [inputData, setInputData] = useState<bodyInformationInput>({
    gender: "",
    age: null,
    height: null,
    weight: null,
    activityLevel: "sedentary",
    goal: "maintain",
  });

  const chooseAgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = e.target.value;
    setInputData((prev) => ({ ...prev, age: parseInt(age) }));
  };
  const chooseHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = e.target.value;
    setInputData((prev) => ({ ...prev, height: parseInt(height) }));
  };
  const chooseWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = e.target.value;
    setInputData((prev) => ({ ...prev, weight: parseInt(height) }));
  };

  const chooseGender = (gender: "male" | "female") => {
    setInputData((prev) => ({ ...prev, gender: gender }));
  };

  console.log(inputData);

  return (
    <div className="h-screen bg-tdeeBackground bg-cover flex flex-col  gap-8 ">
      <div className="mt-10 text-center">Calories Intake Calculator</div>
      <div className="">
        <div>Step1: Enter Details</div>
        <div className="flex mt-4 w-full flex-wrap gap-3 p-4">
          <BodyInformation title="Gender" onClick={chooseGender} />
          <BodyInformation
            title="Age"
            // value={inputData.age}
            onChange={chooseAgeHandler}
            placeholder="age"
          />
          <BodyInformation
            title="Height"
            onChange={chooseHeight}
            placeholder="cm"
          />
          <BodyInformation
            title="Weight"
            onChange={chooseWeight}
            placeholder="kg"
          />
        </div>
      </div>
    </div>
  );
};

export default TdeeCalculator;
