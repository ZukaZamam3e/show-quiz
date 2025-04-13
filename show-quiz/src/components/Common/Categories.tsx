import { Box } from "@mui/material";
import { CategoryModel } from "../../models/CategoryModel";
import { Category } from "./Category";

interface CategoriesProps {
  categories: CategoryModel[];
  admin: boolean;
}

export const Categories = ({ categories, admin }: CategoriesProps) => {
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
          <Category key={index} category={category} enabled={admin} />
        ))}
      </Box>
    </Box>
  );
};
