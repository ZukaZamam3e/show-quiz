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
    _webkit_user_select: "none" /* Safari */,
    _moz_user_select: "none" /* Firefox */,
    _ms_user_select: "none" /* IE10+/Edge */,
    user_select: "none" /* Standard */,
  };

  const typographyStyle = {
    _webkit_user_select: "none" /* Safari */,
    _moz_user_select: "none" /* Firefox */,
    _ms_user_select: "none" /* IE10+/Edge */,
    user_select: "none" /* Standard */,
  };

  return (
    <Card sx={cardStyle} onClick={() => props.onSelectPlayer(props.player.id)}>
      <Typography
        className="unselectable-text"
        variant="h6"
        component="h2"
        style={{ margin: "5px" }}
      >
        {props.player.name} - {props.player.score} pts
      </Typography>
    </Card>
  );
};
