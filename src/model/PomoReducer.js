import { ACTION_TYPES, MODES, MODES_NAMES } from "./constants";

export const initState = {
  mode: MODES_NAMES.FOCUS,
  seconds: MODES[MODES_NAMES.FOCUS].seconds,
  isRunning: false,
  focuses: 0,
  config: {
    [MODES_NAMES.FOCUS]: MODES[MODES_NAMES.FOCUS].seconds,
    [MODES_NAMES.BREAK]: MODES[MODES_NAMES.BREAK].seconds,
    [MODES_NAMES.REST]: MODES[MODES_NAMES.REST].seconds,
    focusesBeforeRest: 2,
  },
};

export function pomodoroReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.START_TIMER:
      return {
        ...state,
        isRunning: true,
      };
    case ACTION_TYPES.PAUSE_TIMER:
      return {
        ...state,
        isRunning: false,
      };
    case ACTION_TYPES.RESET_TIMER:
      return {
        ...state,
        seconds: state.config[state.mode],
        isRunning: false,
      };
    case ACTION_TYPES.TICK:
      const newSeconds = state.seconds > 0 ? state.seconds - 1 : 0;

      if (newSeconds === 0) {
        return pomodoroReducer(state, { type: ACTION_TYPES.SWITCH_MODE });
      }

      return {
        ...state,
        seconds: newSeconds,
      };
    case ACTION_TYPES.SWITCH_MODE:
        return switchMode(state, { direction: 'next' });
    case ACTION_TYPES.PREV_MODE:
        return switchMode(state, { direction: 'prev' });
    default: {
      return state;
    }
  }
}

function switchMode(state, payload = { direction: 'next' }) {
  const { mode, focuses } = state;
  const { focusesBeforeRest } = state.config;
  const direction = payload.direction;

  const newState = { ...state };

  if (direction === 'next') {
    if (mode === MODES_NAMES.FOCUS) {
      if ((focuses + 1) % focusesBeforeRest === 0) {
        newState.mode = MODES_NAMES.REST;
      } else {
        newState.mode = MODES_NAMES.BREAK;
      }
      newState.focuses++;
    } else if (mode === MODES_NAMES.BREAK) {
      newState.mode = MODES_NAMES.FOCUS;
    } else if (mode === MODES_NAMES.REST) {
      newState.mode = MODES_NAMES.FOCUS;
    }
  } else if (direction === 'prev') {
    if (mode === MODES_NAMES.FOCUS) {
      if (focuses % focusesBeforeRest === 0) {
        newState.mode = MODES_NAMES.REST;
      } else {
        newState.mode = MODES_NAMES.BREAK;
      }
    } else if (mode === MODES_NAMES.BREAK) {
      newState.mode = MODES_NAMES.FOCUS;
      newState.focuses--;
    } else if (mode === MODES_NAMES.REST) {
      newState.mode = MODES_NAMES.FOCUS;
      newState.focuses--;
    }
  }

  newState.seconds = state.config[newState.mode];

  return newState;
}
