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
      className={` flex flex-wrap text-center p-3 gap-2 text-white m-4 md:m-0 md:w-3/4 lg:w-[40%] 2xl:w-[40%] 2xl:p-8 rounded-md ${
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
      className={` flex flex-wrap text-center p-3 gap-2 m-4 text-white md:w-3/4 lg:w-[40%] 2xl:w-[30%] rounded-md md:p-4 2xl:p-4 md:m-0 ${
        selectedGoal === arr.goal ? "bg-red-600" : "bg-gray-400"
      } `}
      onClick={() => handleGoalClick(arr.goal)}
    >
      <div className="text-xl w-full">{arr.goal}</div>
    </div>
  ));

  return (
    <>
      <div className="text-center text-slate-600 text-2xl">{stepTitle}</div>
      {activityType && (
        <div className="md:flex md:flex-wrap md:justify-center md:gap-6 ">
          {activityType}
        </div>
      )}
      {!!array?.length && (
        <div className="md:flex md:flex-wrap md:justify-center md:gap-6">
          {goalType}
        </div>
      )}
    </>
  );
};

export default ActivityLevel;
