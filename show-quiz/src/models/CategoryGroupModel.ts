import { CategoryQuestionModel } from "./CategoryQuestionModel";

export interface CategoryGroupModel {
  showName: string;
  questions: CategoryQuestionModel[];
  points: number;
  count: number;
}
