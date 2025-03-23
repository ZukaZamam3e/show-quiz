import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Home/HomePage";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
