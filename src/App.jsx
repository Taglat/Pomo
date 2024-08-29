import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Pomo } from "./pages/Pomo/Pomo.jsx";
import { Settings } from "./pages/settings/settings";
import { useReducer } from "react";
import { initState, pomodoroReducer } from "./model/PomoReducer.js";
import { MODES_NAMES } from "./model/constants.js";

export default function App() {
  const [state, dispatch] = useReducer(pomodoroReducer, initState)

  return (
    <ThemeProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Pomo state={state} dispatch={dispatch} />} />
            <Route path="/settings" element={<Settings state={state} />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
