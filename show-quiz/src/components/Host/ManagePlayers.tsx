import { Box, Button, Stack } from "@mui/material";
import { PlayerModel } from "../../models/PlayerModel";
import { ManagePlayerCard } from "./ManagePlayerCard";
import { useRef, useState } from "react";
import { OATextField } from "../Common/OATextField";

interface ManagePlayersProps {
  players: PlayerModel[];
  turnOrder: number;
  selectedPlayerId: number;
  onSelectPlayer: (playerId: number) => void;
  onAddPoints: (points: number) => void;
  updatePlayers: (players: PlayerModel[]) => void;
  updateTurnOrder: (turnOrder: number) => void;
  pointIncrements: number[];
}

export const ManagePlayers = (props: ManagePlayersProps) => {
  const [pointsToAward, setPointsToAward] = useState<number>(0); // State to hold points to subtract
  const nameRef = useRef<HTMLInputElement>(null);

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
    if (props.selectedPlayerId === playerId) {
      handleResetSelectedPlayer();
    } else {
      props.onSelectPlayer(playerId);
      const player = props.players.find((m) => m.id == playerId);
      if (!!nameRef && !!nameRef.current && !!player) {
        nameRef.current.value = player.name;
      }
    }
  };

  const handleNext = () => {
    let updatedTurnOrder = props.turnOrder + 1;

    if (updatedTurnOrder > props.players.length) {
      updatedTurnOrder = 1;
    }

    props.updateTurnOrder(updatedTurnOrder);
    handleResetSelectedPlayer();
  };

  const handlePrev = () => {
    let updatedTurnOrder = props.turnOrder - 1;

    if (updatedTurnOrder < 1) {
      updatedTurnOrder = props.players.length;
    }

    props.updateTurnOrder(updatedTurnOrder);
    handleResetSelectedPlayer();
  };

  const handleResetSelectedPlayer = () => {
    props.onSelectPlayer(-1);
    if (!!nameRef && !!nameRef.current) {
      nameRef.current.value = "";
    }
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
      if (player.id === props.selectedPlayerId) {
        return { ...player, score: player.score - pointsToAward };
      }
      return player;
    });
    props.updatePlayers(updatedPlayers);
  };

  const handleAddPoints = (points: number) => {
    props.onAddPoints(points);
  };

  const handleChangeName = (e: any) => {
    const updatedPlayers = props.players.map((player) => {
      if (player.id === props.selectedPlayerId) {
        return { ...player, name: e.target.value };
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
        <Box
          sx={{
            gridColumn: "span 2",
            display: "grid",
            columnGap: "10px",
            rowGap: "10px",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {props.players.map((player) => (
            <ManagePlayerCard
              player={player}
              key={player.id}
              selected={player.id === props.selectedPlayerId}
              turn={player.turnOrder == props.turnOrder}
              onSelectPlayer={handleSelectPlayer}
            />
          ))}
        </Box>
        <Box>
          <Stack direction={"row"} spacing={2}>
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
          </Stack>
          <Stack direction={"row"} spacing={2} sx={{ marginTop: "10px" }}>
            {props.pointIncrements.map((increment) => (
              <Button
                key={increment}
                type="button"
                variant="contained"
                onClick={() => handleAddPoints(increment)}
              >
                +{increment}
              </Button>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={2} sx={{ marginTop: "10px" }}>
            {props.pointIncrements.map((increment) => (
              <Button
                key={increment}
                type="button"
                variant="contained"
                onClick={() => handleAddPoints(increment * -1)}
              >
                -{increment}
              </Button>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={2} sx={{ marginTop: "10px" }}>
            <Button type="button" variant="contained" onClick={handleAddPlayer}>
              Add Player
            </Button>
            <OATextField
              ref={nameRef}
              name="name"
              onChange={handleChangeName}
              enabled={props.selectedPlayerId !== -1}
            />
          </Stack>
        </Box>
      </Box>
    </div>
  );
};
