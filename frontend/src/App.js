import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import ElimHeddal from "./pages/elimHeddal";
import ElimMedia from "./pages/ElimMedia";
import SaligBlanding from "./pages/SaligBlanding";

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<ElimHeddal />} />
        <Route path="/elimmedia" element={<ElimMedia />} />
        <Route path="/saligblanding" element={<SaligBlanding />} />
      </Routes>
    </Router>
  );
}

export default App;