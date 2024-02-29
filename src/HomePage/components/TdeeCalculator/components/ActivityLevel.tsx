import { IActivityObject } from "../../data/models/ActivityObjectModel";

interface Props {
  stepTitle: string;
  object?: IActivityObject[];
  array?: string[];
  handleClick?: (
    level: "sedentary" | "active" | "very_active" | "extra_active"
  ) => void;
  selectedLevel?: "sedentary" | "active" | "very_active" | "extra_active";
}

const ActivityLevel: React.FC<Props> = ({
  stepTitle,
  object,
  array,
  handleClick,
  selectedLevel,
}) => {
  const handleActivityClick = (level: IActivityObject["activityLevel"]) => {
    if (handleClick) {
      handleClick(level);
    }
  };

  const activityType = object?.map((ob) => (
    <div
      key={ob.activityLevel}
      className={` flex flex-wrap text-center p-3 gap-2 m-4 rounded-md ${
        selectedLevel === ob.activityLevel ? "selected" : "bg-gray-400"
      }`}
      onClick={() => handleActivityClick(ob.activityLevel)}
    >
      <div className="text-xl w-full">{ob.activityLevel}</div>
      <div className="text-sm w-full">{ob.subTitle}</div>
    </div>
  ));

  return (
    <>
      <div className="text-center text-white text-2xl">{stepTitle}</div>
      {activityType && <div className={``}>{activityType}</div>}
      {array && <div className="bg-red-600">{array}</div>}
    </>
  );
};

export default ActivityLevel;
