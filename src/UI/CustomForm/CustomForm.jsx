import React from "react";
import styles from "./CustomForm.module.css";

export default function CustomForm({ children }) {
  return (
    <form className={styles.customForm} action="">
      {children}
    </form>
  );
}
