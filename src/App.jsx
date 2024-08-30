import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Pomo } from "./pages/Pomo/Pomo.jsx";
import { Settings } from "./pages/Settings/Settings.jsx";
import { useReducer } from "react";
import { initState, pomodoroReducer } from "./model/PomoReducer.js";
import { loadState } from "./util/loadConfig.js";

export default function App() {
  console.log(loadState(initState))
  const [state, dispatch] = useReducer(pomodoroReducer, loadState(initState))

  return (
    <ThemeProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Pomo state={state} dispatch={dispatch} />} />
            <Route path="/settings" element={<Settings state={state} dispatch={dispatch} />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
