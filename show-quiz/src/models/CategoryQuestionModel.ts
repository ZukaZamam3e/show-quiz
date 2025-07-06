export interface CategoryQuestionModel {
  questionId: number;
  showName: string;
  score: number;
  question: string;
  answer: string;
  hints: string[];
  shownHints: string[];
  awardedPlayerId: number;
  answerRevealed: boolean;
  questionShown: boolean;
}

export const defaultQuestion = () => {
  return {
    questionId: -1,
    showName: "",
    score: 0,
    question: "",
    answer: "",
    hints: [],
    shownHints: [],
    awardedPlayerId: -1,
    answerRevealed: false,
    questionShown: false,
  } as CategoryQuestionModel;
};
