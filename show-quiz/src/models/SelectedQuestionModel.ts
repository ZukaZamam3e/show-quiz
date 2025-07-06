import {
  CategoryQuestionModel,
  defaultQuestion,
} from "./CategoryQuestionModel";

export interface SelectedQuestionModel {
  question: CategoryQuestionModel;
  showQuestion: boolean;
  revealAnswer: boolean;
}

export const defaultSelectedQuestion = () => {
  return {
    question: defaultQuestion(),
    showQuestion: false,
    revealAnswer: false,
  };
};
