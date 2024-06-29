import React, { useState } from "react";
import { IActivityObject, IGoalType } from "../data/models/ActivityObjectModel";
import { IBodyInformationInput } from "../data/models/TdeeCalcModel";
import BodyInformation from "./BodyInformation";
import ActivityLevel from "./components/ActivityLevel";
import CalorieResult from "./components/CalorieResult";

const TdeeCalculator = () => {
  const [inputData, setInputData] = useState<IBodyInformationInput>({
    gender: "",
    age: null,
    height: null,
    weight: null,
    activityLevel: "sedentary",
    goal: "maintain",
  });
  const activityObject: IActivityObject[] = [
    {
      activityLevel: "sedentary",
      activityLevelLabel: "Sedentary",
      subTitle: "Spend most of the day sitting, with little to no exercise",
    },
    {
      activityLevel: "active",
      activityLevelLabel: "Active",
      subTitle: "Light workouts 3-4 times/week",
    },
    {
      activityLevel: "very_active",
      activityLevelLabel: "Very Active",
      subTitle: "Heavy workouts 5-7 times/week",
    },
    {
      activityLevel: "extra_active",
      activityLevelLabel: "Extra Active",
      subTitle: "Very intense exercises daily or physical job",
    },
  ];

  const goalArray: IGoalType[] = [
    {
      goal: "maintain",
      goalLabel: "Maintain",
    },
    {
      goal: "lose",
      goalLabel: "Lose",
    },
    {
      goal: "gain",
      goalLabel: "Gain",
    },
  ];

  const handleInputChange =
    (key: keyof IBodyInformationInput) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputData((prev) => ({
        ...prev,
        [key]: parseInt(e.target.value) || null,
      }));
    };

  const chooseGender = (gender: IBodyInformationInput["gender"]) => {
    setInputData((prev) => ({ ...prev, gender }));
  };

  const handleActivityLevelClick = (
    level: "sedentary" | "active" | "very_active" | "extra_active"
  ) => {
    setInputData((prev) => ({ ...prev, activityLevel: level }));
  };

  const handleGoalTypeClick = (goal: IGoalType["goal"]) => {
    setInputData((prev) => ({ ...prev, goal }));
  };

  return (
    // <div className="bg-tdeeBackground bg-cover flex flex-col gap-16 text-white xl:w-1/2 xl:flex xl:m-auto">
    <div className="flex flex-col gap-4 2xl:gap-6 bg-slate-300 2xl:my-20 rounded-2xl text-slate-600 md:w-1/3  lg:w-3/5 xl:w-2/5 2xl:w-1/3 md:flex md:m-auto  xl:gap-6 xl:my-8">
      <div className="mt-10 text-center text-2xl">
        Calories Intake Calculator
      </div>
      <div>
        <div className="text-center text-slate-600 text-2xl">
          Step 1: Enter Details
        </div>
        <div className="flex mt-4 w-full flex-wrap gap-3 justify-center md:gap-4 p-4 md:pt-4 xl:gap-12">
          <BodyInformation title="Gender" onClick={chooseGender} />
          <BodyInformation
            title="Age"
            onChange={handleInputChange("age")}
            placeholder="age"
          />
          <BodyInformation
            title="Height"
            onChange={handleInputChange("height")}
            placeholder="cm"
          />
          <BodyInformation
            title="Weight"
            onChange={handleInputChange("weight")}
            placeholder="kg"
          />
        </div>
      </div>
      <ActivityLevel
        object={activityObject}
        stepTitle="Step 2: Choose Activity Level"
        handleClick={handleActivityLevelClick}
        selectedLevel={inputData.activityLevel}
      />
      <ActivityLevel
        array={goalArray}
        stepTitle="Step 3: Choose Goal"
        handleGoal={handleGoalTypeClick}
        selectedGoal={inputData.goal}
      />
      <CalorieResult inputData={inputData} />
    </div>
  );
};

export default TdeeCalculator;
