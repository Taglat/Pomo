import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { NumberInput } from "../../components/uikit/NumberInput";
import { SvgBack, SvgFocus, SvgBreak, SvgRest } from "../../icons";
import { ACTION_TYPES, MODES_NAMES } from "../../model/constants";
import styles from "./Settings.module.css";

export function Settings({ state, dispatch }) {
  const { config } = state;
  const { focus, rest, focusesBeforeRest } = config;

  useEffect(() => {
    const savedConfig = JSON.parse(localStorage.getItem("pomodoroConfig"));
    if (savedConfig) {
      dispatch({
        type: ACTION_TYPES.SET_CONFIG,
        payload: savedConfig,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("pomodoroConfig", JSON.stringify(config));
  }, [config]);

  const handleInputChange = (mode, value) => {
    if (!isNaN(value)) {
      dispatch({
        type: ACTION_TYPES.UPDATE_CONFIG,
        payload: { mode, value: value * 60 },
      });
    }
  };

  const handleFocusesChange = (value) => {
    if (!isNaN(value)) {
      dispatch({
        type: ACTION_TYPES.UPDATE_FOCUSES_BEFORE_REST,
        payload: value,
      });
    }
  };

  const formatValue = (value) => (isNaN(value) ? "" : value / 60);

  return (
    <>
      <Header link="/" linkPageName={SvgBack} />
      <div className={styles.settingsContainer}>
        <div className={styles.inputRow}>
          <label className={styles.label}>Min for {SvgFocus}</label>
          <NumberInput
            value={formatValue(focus)}
            onChange={(value) => handleInputChange(MODES_NAMES.FOCUS, value)}
            maxValue={99}
            minValue={15}
          />
        </div>

        <div className={styles.inputRow}>
          <label className={styles.label}>Min for {SvgBreak}</label>
          <NumberInput
            value={formatValue(config.break)}
            onChange={(value) => handleInputChange(MODES_NAMES.BREAK, value)}
            maxValue={Math.floor(formatValue(focus) * 0.63)}
            minValue={5}
          />
        </div>

        <div className={styles.inputRow}>
          <label className={styles.label}>Min for {SvgRest}</label>
          <NumberInput
            value={formatValue(rest)}
            onChange={(value) => handleInputChange(MODES_NAMES.REST, value)}
            maxValue={formatValue(focus)}
            minValue={formatValue(config.break) + 1}
          />
        </div>

        <div className={styles.inputRow}>
          <label className={styles.label}>{SvgFocus} for {SvgRest}</label>
          <NumberInput
            value={isNaN(focusesBeforeRest) ? "" : focusesBeforeRest}
            onChange={handleFocusesChange}
            maxValue={5}
            minValue={1}
          />
        </div>
      </div>
    </>
  );
}
