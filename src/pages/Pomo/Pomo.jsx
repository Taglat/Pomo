import clsx from "clsx";
import style from "./Pomo.module.css";
import {
  SvgSettings,
  SvgPlay,
  SvgReset,
  SvgPause,
} from "../../icons";
import { ACTION_TYPES, MODES_NAMES, MODES } from "../../model/constants";
import { Header } from "../../components/Header/Header";
import { Timer } from "../../components/Pomo/Timer/Timer";
import MyBtn from "../../components/uikit/MyBtn";
import { useInterval } from "../../hooks/useTime";

export function Pomo({ state, dispatch }) {
  const modesNames = Object.values(MODES_NAMES);
  const { mode, seconds, isRunning, focuses, config } = state;

  useInterval(1000, isRunning, () => {
    dispatch({ type: ACTION_TYPES.TICK });
  });

  return (
    <>
      <Header link="/settings" linkPageName={SvgSettings} />
      <div className={style.modes}>
        {modesNames.map((modeItem) => (
          <div
            className={clsx(style.mode, mode === modeItem && style.modeActive)}
            key={modeItem}
          >
            {MODES[modeItem].svg}
            {modeItem}
          </div>
        ))}
      </div>
      <Timer seconds={seconds} focuses={focuses} config={config} dispatch={dispatch} />
      <div className={style.btns}>
        <MyBtn
          shape="circle"
          onClick={() => {
            !isRunning && dispatch({ type: ACTION_TYPES.START_TIMER });
          }}
        >
          {SvgPlay}
        </MyBtn>
        <MyBtn
          shape="circle"
          onClick={() => {
            isRunning && dispatch({ type: ACTION_TYPES.PAUSE_TIMER });
          }}
        >
          {SvgPause}
        </MyBtn>

        <MyBtn
          shape="circle"
          onClick={() => {
            dispatch({ type: ACTION_TYPES.RESET_TIMER });
          }}
        >
          {SvgReset}
        </MyBtn>
      </div>
    </>
  );
}
