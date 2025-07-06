import { Box, Button } from "@mui/material";
import { CategoryGroupModel } from "../../models/CategoryGroupModel";

interface CategoryGroupProps {
  group: CategoryGroupModel;
  enabled: boolean;
  onGetUnRevealedQuestion: (
    showName: string,
    score: number,
    questionId?: number
  ) => void;
}

export const CategoryGroup = ({
  group,
  enabled,
  onGetUnRevealedQuestion,
}: CategoryGroupProps) => {
  const handleOpenQuestions = () => {
    onGetUnRevealedQuestion(group.showName, group.points);
  };

  const questionsLeft = group.questions.filter((m) => !m.answerRevealed).length;

  if (questionsLeft === 0) {
    enabled = false;
  }

  return (
    <Button
      key={group.points}
      type="button"
      variant="contained"
      sx={{ margin: "5px", width: 200 }}
      onClick={handleOpenQuestions}
      disabled={!enabled}
    >
      {group.points}pt: {questionsLeft} left
    </Button>
  );
};
