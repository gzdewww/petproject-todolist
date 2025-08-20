import React from "react";
import styles from "./CustomForm.module.css";

export default function CustomForm({ children, onSubmit, className }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className}`}
      action=""
    >
      {children}
    </form>
  );
}
