import styles from "./NumberInput.module.css";

export function NumberInput({ value, onChange, maxValue, minValue }) {
  const handleIncrement = () => {
    if (value < maxValue) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > minValue) {
      onChange(value - 1);
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleDecrement}>
          -
        </button>
        <div className={styles.buttonInfo}>Min: {minValue}m</div>
      </div>
      <input type="text" value={value} readOnly className={styles.input} />
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleIncrement}>
          +
        </button>
        <div className={styles.buttonInfo}>Max: {maxValue}m</div>
      </div>
    </div>
  );
}
