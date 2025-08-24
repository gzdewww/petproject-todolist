import styles from "./CustomButton.module.css";

export default function CustomButton({
  children,
  type = "button",
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
