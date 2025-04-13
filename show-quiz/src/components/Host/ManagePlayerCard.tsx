import { Card, Typography } from "@mui/material";
import { PlayerModel } from "../../models/PlayerModel";

interface ManagePlayerCardProps {
  player: PlayerModel;
  onSelectPlayer: (playerId: number) => void;
  selected: boolean;
  turn: boolean;
}

export const ManagePlayerCard = (props: ManagePlayerCardProps) => {
  const hasBorder = props.selected || props.turn;
  const borderColor = hasBorder
    ? props.selected
      ? "blue"
      : "green"
    : "transparent";

  const cardStyle = {
    margin: "5px",
    padding: hasBorder ? "4px" : "5px",
    border: props.selected ? "2px solid blue" : "1px solid gray",
    cursor: "pointer",
    borderColor: borderColor,
    borderWidth: hasBorder ? "2px" : "1px",
  };

  return (
    <Card sx={cardStyle} onClick={() => props.onSelectPlayer(props.player.id)}>
      <Typography variant="h6" component="h2" style={{ margin: "5px" }}>
        {props.player.name} - {props.player.score} points
      </Typography>
    </Card>
  );
};
