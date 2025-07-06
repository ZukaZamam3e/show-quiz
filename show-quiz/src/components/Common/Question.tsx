import { Box } from "@mui/material";
import { CategoryQuestionModel } from "../../models/CategoryQuestionModel";

interface QuestionProps {
  question: CategoryQuestionModel;
}

export const Question = ({ question }: QuestionProps) => {
  return (
    <Box sx={{ margin: "5px", width: 200 }}>
      <div className="question">
        <h3>{question.question}</h3>
        <p>Answer: {question.answer}</p>
        <p>Hints:</p>
        <ul>
          {question.hints.map((hint, index) => (
            <li key={index}>{hint}</li>
          ))}
        </ul>
      </div>
    </Box>
  );
};
