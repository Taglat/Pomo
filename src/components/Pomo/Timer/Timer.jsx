import { SvgNext, SvgPrev, SvgFocus, SvgRest } from "../../../icons";
import { ACTION_TYPES } from "../../../model/constants";
import styles from "./Timer.module.css";

export function Timer({ seconds, focuses, dispatch }) {
  const formattedMinutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const formattedSeconds = String(seconds % 60).padStart(2, "0");

  return (
    <div className={styles.timerContainer}>
      <div
        className={styles.prev}
        onClick={() => {
          dispatch({ type: ACTION_TYPES.PREV_MODE });
        }}
      >
        {SvgPrev}
      </div>
      <div className={styles.time}>
        {formattedMinutes}:{formattedSeconds}
        <div className={styles.info}>
          <div className={styles.infoItem}>Completed {SvgFocus} :{focuses}</div>
        </div>
      </div>
      <div
        className={styles.next}
        onClick={() => {
          dispatch({ type: ACTION_TYPES.SWITCH_MODE });
        }}
      >
        {SvgNext}
      </div>
    </div>
  );
}
