import {
  IActivityObject,
  IGoalType,
} from "../../data/models/ActivityObjectModel";

interface Props {
  stepTitle: string;
  object?: IActivityObject[];
  array?: IGoalType[];
  handleClick?: (level: IActivityObject["activityLevel"]) => void;
  handleGoal?: (goal: IGoalType["goal"]) => void;
  selectedLevel?: IActivityObject["activityLevel"];
  selectedGoal?: IGoalType["goal"];
}

const ActivityLevel: React.FC<Props> = ({
  stepTitle,
  object,
  array,
  handleClick,
  handleGoal,
  selectedLevel,
  selectedGoal,
}) => {
  const handleActivityClick = (level: IActivityObject["activityLevel"]) => {
    if (handleClick) {
      handleClick(level);
    }
  };

  const handleGoalClick = (goal: IGoalType["goal"]) => {
    if (handleGoal) {
      handleGoal(goal);
    }
  };

  const activityType = object?.map((ob) => (
    <div
      key={ob.activityLevel}
      className={` flex flex-wrap text-center p-3 gap-2 m-4  rounded-md ${
        selectedLevel === ob.activityLevel ? "bg-red-600" : "bg-gray-400"
      } `}
      onClick={() => handleActivityClick(ob.activityLevel)}
    >
      <div className="text-xl w-full">{ob.activityLevel}</div>
      <div className="text-sm w-full">{ob.subTitle}</div>
    </div>
  ));

  const goalType = array?.map((arr) => (
    <div
      key={arr.goal}
      className={` flex flex-wrap text-center p-3 gap-2 m-4  rounded-md ${
        selectedGoal === arr.goal ? "bg-red-600" : "bg-gray-400"
      } `}
      onClick={() => handleGoalClick(arr.goal)}
    >
      <div className="text-xl w-full">{arr.goal}</div>
    </div>
  ));

  return (
    <>
      <div className="text-center text-white text-2xl">{stepTitle}</div>
      {activityType && <div>{activityType}</div>}
      {!!array?.length && <div className="text-white">{goalType}</div>}
    </>
  );
};

export default ActivityLevel;
