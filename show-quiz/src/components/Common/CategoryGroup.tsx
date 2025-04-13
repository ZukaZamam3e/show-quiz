import { Box, Button } from "@mui/material";
import { CategoryGroupModel } from "../../models/CategoryGroupModel";

interface CategoryGroupProps {
  group: CategoryGroupModel;
  enabled: boolean;
}

export const CategoryGroup = ({ group, enabled }: CategoryGroupProps) => {
  return enabled ? (
    <Button
      key={group.points}
      type="button"
      variant="contained"
      sx={{ margin: "5px", width: 200 }}
    >
      {group.points}pt: {group.count} left
    </Button>
  ) : (
    <Box key={group.points} sx={{ margin: "5px", width: 200 }}>
      {group.points}pt: {group.count} left
    </Box>
  );
};
