import clsx from "clsx";
import style from "./Pomo.module.css";
import {
  SvgSettings,
  SvgPlay,
  SvgReset,
  SvgPause,
} from "../../icons";
import { ACTION_TYPES, MODES_NAMES, MODES, playSound } from "../../model/constants";
import { Header } from "../../components/Header/Header";
import { Timer } from "../../components/Pomo/Timer/Timer";
import MyBtn from "../../components/uikit/MyBtn";
import { useInterval } from "../../hooks/useTime";
import { useEffect } from "react";

export function Pomo({ state, dispatch, sound, setSound}) {
  const modesNames = Object.values(MODES_NAMES);
  const { mode, seconds, isRunning, focuses, config } = state;

  useInterval(1000, isRunning, () => {
    mode === MODES_NAMES.FOCUS & sound && playSound('tick');
    dispatch({ type: ACTION_TYPES.TICK });
  });

  useEffect(() => {
    if (sound) {
      if (mode === MODES_NAMES.FOCUS && seconds === 5) {
        playSound('focusEnd');
      } else if (mode === MODES_NAMES.BREAK && seconds === 5) {
        playSound('restEnd');
      } else if (mode === MODES_NAMES.REST && seconds === 5) {
        playSound('restEnd');
      }
    }
  }, [mode, seconds, sound]);

  if (mode === MODES_NAMES.BREAK && sound) {
    if (config[MODES_NAMES.BREAK] - seconds === config[MODES_NAMES.BREAK] - 5) {
      playSound('restEnd');
    }
  }

  return (
    <>
      <Header link="/settings" linkPageName={SvgSettings} sound={sound} setSound={setSound} />
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
      <Timer mode={mode} seconds={seconds} focuses={focuses} config={config} dispatch={dispatch} />
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
