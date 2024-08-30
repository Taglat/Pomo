import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import MyBtn from "../uikit/MyBtn";
import { SvgMoon, SvgSun } from "../../icons";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <MyBtn shape="rectangle" onClick={() => toggleTheme()}>
      {theme === "light" ? SvgSun : SvgMoon}
    </MyBtn>
  );
}
