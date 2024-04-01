import { IBodyInformationInput } from "../../data/models/TdeeCalcModel";

interface Props {
  inputData: IBodyInformationInput;
}

const CalorieResult: React.FC<Props> = ({ inputData }) => {
  const { gender, age, height, weight, activityLevel, goal } = inputData;

  if (
    gender === undefined ||
    age === null ||
    height === null ||
    weight === null
  ) {
    return (
      <div className="flex justify-center text-xl">Data not Sufficient</div>
    );
  }
  const bmr: number =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const activityMultipliers: Record<string, number> = {
    sedentary: 1.2,
    active: 1.55,
    very_active: 1.725,
    extra_active: 1.9,
  };

  const activityMultiplier = activityMultipliers[activityLevel];

  const calcResult = () => {
    if (goal === "maintain") {
      return bmr * activityMultiplier;
    } else if (goal === "lose") {
      return bmr * activityMultiplier - 500;
    } else {
      return bmr * activityMultiplier + 500;
    }
  };
  return (
    <div className="flex justify-center gap-10 text-xl">
      <div>Calorie Intake:</div>
      <div>{calcResult().toFixed(0)}</div>
    </div>
  );
};

export default CalorieResult;
