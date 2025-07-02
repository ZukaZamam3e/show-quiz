import { Button } from "@mui/material";
import { PlayerModel } from "../../models/PlayerModel";

interface TurnOrderProps {
  players: PlayerModel[];
  turnOrder: number;
  updatePlayers: (players: PlayerModel[]) => void;
}

export const TurnOrder = (props: TurnOrderProps) => {
  let orderedPlayers: PlayerModel[] = [];

  props.players.forEach((player) => {
    const index =
      player.turnOrder -
      props.turnOrder +
      (player.turnOrder < props.turnOrder ? props.players.length : 0);
    orderedPlayers[index] = player;
  });

  // 4 - 4 = 0
  // 5 - 4 = 1
  // 1 - 4 + 5 = 2
  // 2 - 4 + 5 = 3
  // 3 - 4 + 5 = 4

  // const orderedPlayers = props.players
  //   .slice(props.turnOrder - 1)
  //   .concat(props.players.slice(0, props.turnOrder - 1));

  return (
    <div className="turn-order">
      <h2>Turn Order</h2>
      {orderedPlayers.map((player) => (
        <div key={player.turnOrder} className="player-turn-order">
          <span className="player-name">{player.name}</span>
        </div>
      ))}
    </div>
  );
};
