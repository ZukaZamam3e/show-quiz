import { PlayerModel } from "../../models/PlayerModel";

interface ScoreBoardProps {
  players: PlayerModel[];
}

export const ScoreBoard = (props: ScoreBoardProps) => {
  const orderedPlayers = [...props.players].sort((a, b) => b.score - a.score);

  return (
    <div className="turn-order">
      <h2>Scoreboard</h2>
      {orderedPlayers.map((player) => (
        <div key={player.turnOrder} className="player-turn-order">
          <span className="player-name">
            {player.name} - {player.score}
          </span>
        </div>
      ))}
    </div>
  );
};
