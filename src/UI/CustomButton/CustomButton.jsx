import React from "react";
import styles from "./CustomButton.module.css";

export default function CustomButton({
  children,
  type = "button",
  className = "",
}) {
  return (
    <button type={type} className={styles.customButton + className}>
      {children}
    </button>
  );
}
