import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Saved } from "./pages/Saved";
import { Completed } from "./pages/Completed";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/completed" element={<Completed />} />
    </Routes>
  );
};
