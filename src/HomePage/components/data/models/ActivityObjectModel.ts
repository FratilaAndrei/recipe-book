    export interface IActivityObject  {
        activityLevel: "sedentary" | "active" | "very_active" | "extra_active";
        subTitle: string;
        activityLevelLabel: "Sedentary" | "Active" | "Very Active" | "Extra Active"
    }

    export interface IGoalType {
        goal: "maintain" | "lose" | "gain";
        goalLabel: "Maintain" | "Lose" | "Gain";
    }