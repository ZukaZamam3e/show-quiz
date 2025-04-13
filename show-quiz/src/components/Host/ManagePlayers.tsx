import { Box, Button } from "@mui/material";
import { PlayerModel } from "../../models/PlayerModel";
import { ManagePlayerCard } from "./ManagePlayerCard";
import { useState } from "react";
import { OAInput } from "../Common/OAInput";

interface ManagePlayersProps {
  players: PlayerModel[];
  updatePlayers: (players: PlayerModel[]) => void;
}

export const ManagePlayers = (props: ManagePlayersProps) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState<number>(-1);
  const [pointsToAward, setPointsToAward] = useState<number>(0); // State to hold points to subtract

  const handleAddPlayer = () => {
    const newPlayer: PlayerModel = {
      id: props.players.length + 1,
      name: `Player ${props.players.length + 1}`,
      score: 0,
      turnOrder: props.players.length + 1, // Set initial turn order based on the number of players
    };
    props.updatePlayers([...props.players, newPlayer]);
  };

  const handleSelectPlayer = (playerId: number) => {
    if (selectedPlayerId === playerId) {
      setSelectedPlayerId(-1);
    } else {
      setSelectedPlayerId(playerId);
    }
  };

  const handleNext = () => {
    const updatedPlayers = [...props.players];

    if (updatedPlayers.length === 0) return;

    for (let i = 0; i < updatedPlayers.length; i++) {
      const player = updatedPlayers[i];
      player.turnOrder -= 1;

      if (player.turnOrder < 1) {
        player.turnOrder = updatedPlayers.length;
      }
    }

    props.updatePlayers(updatedPlayers);
    setSelectedPlayerId(-1);
  };

  const handlePrev = () => {
    const updatedPlayers = [...props.players];

    if (updatedPlayers.length === 0) return;

    for (let i = 0; i < updatedPlayers.length; i++) {
      const player = updatedPlayers[i];
      player.turnOrder += 1;

      if (player.turnOrder > updatedPlayers.length) {
        player.turnOrder = 1;
      }
    }

    props.updatePlayers(updatedPlayers);
    setSelectedPlayerId(-1);
  };

  const handleChangePointsToAward = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setPointsToAward(value);
    } else {
      setPointsToAward(0); // Reset to 0 if invalid input
    }
  };

  const handleSubtractPoints = () => {
    const updatedPlayers = props.players.map((player) => {
      if (player.id === selectedPlayerId) {
        return { ...player, score: player.score - pointsToAward };
      }
      return player;
    });
    props.updatePlayers(updatedPlayers);
  };

  const handleAddPoints = () => {
    const updatedPlayers = props.players.map((player) => {
      if (selectedPlayerId === -1) {
        if (player.turnOrder === 1) {
          return { ...player, score: player.score + pointsToAward };
        } else {
          return player;
        }
      } else if (player.id === selectedPlayerId) {
        return { ...player, score: player.score + pointsToAward };
      } else {
        return player;
      }
    });

    props.updatePlayers(updatedPlayers);
  };

  const orderedPlayers = [...props.players].sort(
    (a, b) => a.turnOrder - b.turnOrder
  );

  return (
    <div>
      <h2>Manage Players</h2>
      <Box
        sx={{
          display: "grid",
          columnGap: "10px",
          rowGap: "10px",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {orderedPlayers.map((player) => (
          <ManagePlayerCard
            player={player}
            key={player.id}
            selected={player.id === selectedPlayerId}
            turn={player.turnOrder == 1}
            onSelectPlayer={handleSelectPlayer}
          />
        ))}
      </Box>
      <div>
        <Button
          type="button"
          variant="contained"
          onClick={handlePrev}
          disabled={props.players.length === 0}
        >
          Previous Turn
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={handleNext}
          disabled={props.players.length === 0}
        >
          Next Turn
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={handleSubtractPoints}
          disabled={props.players.length === 0}
        >
          Subtract Points
        </Button>
        <OAInput
          name="pointsToAward" // Name of the input field
          label="Points"
          defaultValue={pointsToAward}
          onChange={handleChangePointsToAward} // Function to handle input change
        />
        <Button
          type="button"
          variant="contained"
          onClick={handleAddPoints}
          disabled={props.players.length === 0}
        >
          Add Points
        </Button>
      </div>
      <button onClick={handleAddPlayer}>Add Player</button>
    </div>
  );
};
