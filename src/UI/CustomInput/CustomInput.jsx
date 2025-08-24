import React from "react";
import styles from "./CustomInput.module.css";

export default function CustomInput({
  className,
  value,
  onChange,
  placeholder,
  error,
  ...props
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={error || placeholder}
      aria-invalid={Boolean(error)}
      className={`${styles.input} ${error ? styles.error : ""} ${className}`}
      {...props}
    />
  );
}
