import { Box } from "@mui/material";
import { CategoryModel, defaultCategories } from "../../models/CategoryModel";
import { useEffect, useState } from "react";
import { Category } from "../Common/Category";
import { Categories } from "../Common/Categories";
import { TurnOrder } from "../Common/TurnOrder";
import { defaultPlayers, PlayerModel } from "../../models/PlayerModel";
import { ScoreBoard } from "../Common/ScoreBoard";
import { ManagePlayers } from "./ManagePlayers";

export const HostPage = () => {
  const [categories, setCategories] =
    useState<CategoryModel[]>(defaultCategories());

  const [players, setPlayers] = useState<PlayerModel[]>(defaultPlayers());

  return (
    <div>
      <Categories categories={categories} admin={true} />
      <div>
        <Box
          sx={{
            display: "grid",
            columnGap: "10px",
            rowGap: "10px",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <div style={{ gridColumn: "span 3" }}>
            <ManagePlayers players={players} updatePlayers={setPlayers} />
          </div>
          <TurnOrder players={players} updatePlayers={setPlayers} />
          <ScoreBoard players={players} />
        </Box>
      </div>
    </div>
  );
};
