import { Box } from "@mui/material";
import { CategoryModel } from "../../models/CategoryModel";
import { Category } from "./Category";

interface CategoriesProps {
  categories: CategoryModel[];
  admin: boolean;
  onGetUnRevealedQuestion: (
    showName: string,
    score: number,
    questionId?: number
  ) => void;
}

export const Categories = ({
  categories,
  admin,
  onGetUnRevealedQuestion,
}: CategoriesProps) => {
  const gtc = `repeat(${categories.length}, 1fr)`;
  return (
    <Box
      sx={{
        width: "90vw",
      }}
    >
      <Box
        sx={{
          display: "grid",
          columnGap: "10px",
          rowGap: "10px",
          gridTemplateColumns: gtc,
        }}
      >
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            enabled={admin}
            onGetUnRevealedQuestion={onGetUnRevealedQuestion}
          />
        ))}
      </Box>
    </Box>
  );
};
