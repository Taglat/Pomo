import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MyBtn from "../uikit/MyBtn";
import { ACTION_TYPES } from "../../model/constants";
import { SvgSound, SvgSoundOff } from "../../icons";

export function Header({ link, linkPageName, sound, setSound }) {
  return (
    <header className={styles.header}>
      <Link to={link}>
        <MyBtn shape="rectangle">{linkPageName}</MyBtn>
      </Link>
      <div className={styles.headerSwitchers}>
        <MyBtn shape="rectangle" className={styles.soundSwitcher} onClick={() => setSound(!sound)}>
          {sound ? SvgSound : SvgSoundOff}
        </MyBtn>
        <ThemeSwitcher />
      </div>
      
    </header>
  );
}
