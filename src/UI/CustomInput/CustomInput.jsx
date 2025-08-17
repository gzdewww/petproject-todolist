import React from "react";
import styles from "./CustomInput.module.css";

export default function CustomInput({ value, onChange, placeholder, error }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={error || placeholder}
      aria-invalid={Boolean(error)}
      className={`${styles.customInput} + ${error ? styles.error : ""}`}
    />
  );
}
