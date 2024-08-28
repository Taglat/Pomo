import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? savedTheme : "light";
    }
  );

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
