import styles from "./Timer.module.css";

export function Timer({ seconds }) {
  const formattedMinutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const formattedSeconds = String(seconds % 60).padStart(2, "0");

  return (
    <div className={styles.timerContainer}>
      {formattedMinutes}:{formattedSeconds}
    </div>
  );
}
