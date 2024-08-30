import styles from "./MyBtn.module.css";
import clsx from "clsx";

/**
 * @param {{
 * children: any,
 * className?: string,
 * shape: 'circle' | 'rectangle',
 * onClick?: () => void
 * }} props
 */

export default function MyBtn({ className, children, shape, onClick }) {

  const btnClassName = clsx(
    styles.btn, 
    className,
    styles[shape],
  );

  return <button className={btnClassName} onClick={onClick}>{children}</button>;
}
