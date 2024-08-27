import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Pomo } from "./pages/pomo/pomo";
import { Settings } from "./pages/settings/settings";

export default function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Pomo />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
