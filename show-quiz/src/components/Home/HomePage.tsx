import { Box } from "@mui/material";
import { HomePageCard } from "./HomePageCard";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToPlayClick = () => {
    navigate("/play");
  };

  const handleNavigateToHostClick = () => {
    navigate("/host");
  };

  return (
    <Box
      sx={{
        width: "90vw",
      }}
    >
      <Box
        sx={{
          display: "grid",
          columnGap: "10px",
          rowGap: "10px",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },
        }}
      >
        <HomePageCard
          title="Join Game"
          description="Enter your code from the host."
          navigateText="Join"
          onNavigateClick={handleNavigateToPlayClick}
        />
        <HomePageCard
          title="Host Game"
          description="Host a game for your friends."
          navigateText="Host"
          onNavigateClick={handleNavigateToHostClick}
        />
      </Box>
    </Box>
  );
};
