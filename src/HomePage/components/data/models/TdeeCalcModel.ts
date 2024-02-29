export interface IBodyInformationInput {
    gender: "male" | "female" | "";
    age: number | null;
    height: number | null;
    weight: number | null;
    activityLevel: "sedentary" | "active" | "very_active" | "extra_active";
    goal: "maintain" | "lose" | " gain";
  }