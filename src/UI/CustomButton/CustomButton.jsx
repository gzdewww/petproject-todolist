import React from "react";
import styles from "./CustomButton.module.css";

export default function CustomButton({ children, ...props }) {
  return (
    <button {...props} className={styles.customButton}>
      {children}
    </button>
  );
}
