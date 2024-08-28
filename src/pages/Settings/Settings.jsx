import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import MyBtn from "../../components/uikit/MyBtn";
import styles from "./Settings.module.css";
import { Link } from "react-router-dom";

export function Settings() {
  return (
    <div>
      <header className={styles.header}>
        <Link to="/">
          <MyBtn shape="rectangle">Pomo</MyBtn>
        </Link>
        <ThemeSwitcher />
      </header>
    </div>
  );
}
