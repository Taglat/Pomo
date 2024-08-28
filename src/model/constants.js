export const MODES_NAMES = {
  FOCUS: 'focus',
  BREAK: 'break',
  REST: 'rest',
}

export const MODES = {
  [MODES_NAMES.FOCUS]: {
    name: MODES_NAMES.FOCUS,
    seconds: 25 * 60,
  },
  [MODES_NAMES.BREAK]: {
    name: MODES_NAMES.BREAK,
    seconds: 5 * 60,
  },
  [MODES_NAMES.REST]: {
    name: MODES_NAMES.REST,
    seconds: 15* 60,
  }
}

export const ACTION_TYPES = {
  SET_MODE: 'set-mode',
}