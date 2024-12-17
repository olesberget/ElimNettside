import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ElimHeddal from "./pages/elimHeddal";
import ElimMedia from "./pages/ElimMedia";
import SaligBlanding from "./pages/SaligBlanding";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/elim">ElimHeddal</Link>
            </li>
            <li>
              <Link to="/elimmedia">Elim Media</Link>
            </li>
            <li>
              <Link to="/saligblanding">Salig Blanding</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/elim" element={<ElimHeddal />} />
          <Route path="/elimmedia" element={<ElimMedia />} />
          <Route path="/saligblanding" element={<SaligBlanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;