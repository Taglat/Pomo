import { MODES_NAMES } from "../model/constants";

export function loadState(initState) {
  const savedConfig = localStorage.getItem("pomodoroConfig");
  if (savedConfig) {
    const config = JSON.parse(savedConfig);
    return {
      mode: MODES_NAMES.FOCUS,
      seconds: config[MODES_NAMES.FOCUS] || initState.seconds,
      isRunning: false,
      focuses: 0,
      config: {
        [MODES_NAMES.FOCUS]: config[MODES_NAMES.FOCUS] || initState.config[MODES_NAMES.FOCUS],
        [MODES_NAMES.BREAK]: config[MODES_NAMES.BREAK] || initState.config[MODES_NAMES.BREAK],
        [MODES_NAMES.REST]: config[MODES_NAMES.REST] || initState.config[MODES_NAMES.REST],
        focusesBeforeRest: config.focusesBeforeRest || initState.config.focusesBeforeRest,
      },
    };
  }
  return initState;
}

export function loadSound() {
  const isSound = localStorage.getItem("isSound");
  
  if (isSound) {
    return JSON.parse(isSound)
  } 
  return true;
}