import React from "react";
import styles from "./CustomForm.module.css";

export default function CustomForm({
  children,
  onSubmit,
  className,
  ...props
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className}`}
      action=""
      {...props}
    >
      {children}
    </form>
  );
}
