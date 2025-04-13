import { Button } from "@mui/material";
import { PlayerModel } from "../../models/PlayerModel";

interface TurnOrderProps {
  players: PlayerModel[];
  updatePlayers: (players: PlayerModel[]) => void;
}

export const TurnOrder = (props: TurnOrderProps) => {
  const orderedPlayers = [...props.players].sort(
    (a, b) => a.turnOrder - b.turnOrder
  );

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
