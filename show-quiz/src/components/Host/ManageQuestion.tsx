import { Box, Button, Stack } from "@mui/material";
import { CategoryQuestionModel } from "../../models/CategoryQuestionModel";
import { Question } from "../Common/Question";
import { SelectedQuestionModel } from "../../models/SelectedQuestionModel";

interface ManageQuestionProps {
  selectedQuestion: CategoryQuestionModel;
  onUnselectQuestion: () => void;
  onAwardPoints: () => void;
  onRevealAnswer: () => void;
  onShowHint: (hint: string) => void;
  onGetUnRevealedQuestion: (
    showName: string,
    score: number,
    questionId?: number
  ) => void;
  questionsLeft: number;
}

export const ManageQuestion = (props: ManageQuestionProps) => {
  return (
    <Box>
      <Question question={props.selectedQuestion} />
      <Stack direction={"row"} spacing={2} sx={{ marginTop: "10px" }}>
        <Button
          type="button"
          variant="contained"
          onClick={() => props.onAwardPoints()}
          disabled={props.selectedQuestion.awardedPlayerId !== -1}
        >
          Award Points
        </Button>
        {props.selectedQuestion.hints.map((hint) => (
          <div key={hint}>
            <Box>{hint}</Box>
            <Button
              type="button"
              variant="outlined"
              onClick={() => props.onShowHint(hint)}
              disabled={props.selectedQuestion.shownHints.includes(hint)}
            >
              Show Hint
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="contained"
          onClick={() => props.onRevealAnswer()}
          disabled={props.selectedQuestion.answerRevealed}
        >
          Reveal Answer
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() => props.onUnselectQuestion()}
        >
          Go Back
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            props.onGetUnRevealedQuestion(
              props.selectedQuestion.showName,
              props.selectedQuestion.score,
              props.selectedQuestion.questionId
            )
          }
          disabled={props.questionsLeft - 1 == 0}
        >
          Get Another Question
        </Button>
      </Stack>
    </Box>
  );
};
