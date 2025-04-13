import { Box, Button, Card, CardMedia } from "@mui/material";
import { CategoryModel } from "../../models/CategoryModel";
import { CategoryGroupModel } from "../../models/CategoryGroupModel";
import { CategoryGroup } from "./CategoryGroup";

interface CategoryProps {
  category: CategoryModel;
  enabled: boolean;
}

export const Category = ({ category, enabled }: CategoryProps) => {
  const cardStyle = {
    position: "relative",
  };

  const titleStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "10px",
  };

  const questionGroups = category.questions.reduce((acc, question) => {
    const existingGroup = acc.find((group) => group.points === question.score);
    if (existingGroup) {
      existingGroup.count += 1;
    } else {
      acc.push({ points: question.score, count: 1 });
    }
    return acc;
  }, [] as CategoryGroupModel[]);

  return (
    <div>
      <Card
        sx={{
          display: "flex",
          margin: "auto",
          width: 200,
          height: 300,
        }}
      >
        <CardMedia component="img" image={category.imgUrl} />
      </Card>
      {questionGroups.map((group) => (
        <CategoryGroup group={group} enabled={enabled} />
      ))}
    </div>
  );
};
