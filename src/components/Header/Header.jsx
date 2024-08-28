import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MyBtn from "../uikit/MyBtn";

export function Header({ link, linkPageName }) {
  return (
    <header className={styles.header}>
      <Link to={link}>
        <MyBtn shape="rectangle">{linkPageName}</MyBtn>
      </Link>
      <ThemeSwitcher />
    </header>
  );
}
