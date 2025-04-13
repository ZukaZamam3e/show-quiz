import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Home/HomePage";
import { PlayPage } from "../Play/PlayPage";
import { HostPage } from "../Host/HostPage";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/play" element={<PlayPage />} />
      <Route path="/host" element={<HostPage />} />
    </Routes>
  );
};
