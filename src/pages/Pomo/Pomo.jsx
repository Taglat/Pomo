import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import MyBtn from "../../components/uikit/MyBtn";
import styles from "./Pomo.module.css";
import { Link } from "react-router-dom";

export function Pomo() {
  return (
    <div className={styles.pomo}>
      <header className={styles.header}>
        <ThemeSwitcher />
        <Link to="/settings">
          <MyBtn shape="rectangle">Settings</MyBtn>
        </Link>
      </header>
    </div>
  );
}
