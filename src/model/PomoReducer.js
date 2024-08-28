import {ACTION_TYPES, MODES, MODES_NAMES} from './constants';

export const initState = {
  mode: MODES[MODES_NAMES.FOCUS].name,
  seconds: MODES[MODES_NAMES.FOCUS].seconds,
  cyclesBeforeRest: 0,
  config: {
    focusDuration: MODES[MODES_NAMES.FOCUS].seconds,
    breakDuration: MODES[MODES_NAMES.BREAK].seconds,
    restDuration: MODES[MODES_NAMES.REST].seconds,
    cyclesBeforeRest: 2,
  }
}

export function pomodoroReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_MODE:
      return {
        ...state,
        mode: action.payload.mode,
        seconds: MODES[action.payload.mode].seconds,
      } 
  }
}
