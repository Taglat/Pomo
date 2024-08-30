import { SvgFocus, SvgBreak, SvgRest } from "../icons"
import focusEndSound from '../audio/focusEnd.mp3';
import restEndSound from '../audio/restEnd.mp3';
import tickSound from '../audio/tick.mp3';

export const MODES_NAMES = {
  FOCUS: 'focus',
  BREAK: 'break',
  REST: 'rest',
}

export const MODES = {
  [MODES_NAMES.FOCUS]: {
    name: MODES_NAMES.FOCUS,
    seconds: 25 * 60,
    svg: SvgFocus,
  },
  [MODES_NAMES.BREAK]: {
    name: MODES_NAMES.BREAK,
    seconds: 5 * 60,
    svg: SvgBreak,
  },
  [MODES_NAMES.REST]: {
    name: MODES_NAMES.REST,
    seconds: 15 * 60,
    svg: SvgRest,
  }
}

export const ACTION_TYPES = {
  START_TIMER: 'start_timer',
  PAUSE_TIMER: 'pause_timer',
  RESET_TIMER: 'reset_timer',
  TICK: 'tick',
  SWITCH_MODE: 'switch_mode',
  PREV_MODE: 'prev_mode',
  UPDATE_CONFIG: 'update_config',
  UPDATE_FOCUSES_BEFORE_REST: 'update_focuses_before_rest',
  SET_CONFIG: 'set_config',
  SOUND_SWITCH: 'sound_switch',
}

export const sounds = {
  tick: new Audio(tickSound),
  focusEnd: new Audio(focusEndSound),
  restEnd: new Audio(restEndSound)
}


export function playSound(type) {
  const sound = sounds[type];
  if (sound) {
    sound.play().catch(error => {
      console.error(`Error playing sound ${type}:`, error);
    });
  } else {
    console.warn(`No sound found for type ${type}`);
  }
}