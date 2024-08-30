import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Pomo } from "./pages/Pomo/Pomo.jsx";
import { Settings } from "./pages/Settings/Settings.jsx";
import { useReducer, useState } from "react";
import { initState, pomodoroReducer } from "./model/PomoReducer.js";
import { loadSound, loadState } from "./util/loadConfig.js";

export default function App() {
  const [state, dispatch] = useReducer(pomodoroReducer, loadState(initState))
  const [sound, setSound] = useState(loadSound())

  return (
    <ThemeProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Pomo state={state} dispatch={dispatch} sound={sound} setSound={setSound} />} />
            <Route path="/settings" element={<Settings state={state} dispatch={dispatch} sound={sound} setSound={setSound} />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
