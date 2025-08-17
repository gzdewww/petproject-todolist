import React from "react";
import styles from "./CustomInput.module.css";

export default function CustomInput({ ...props }) {
  return (
    <input
      {...props}
      className={
        props.error
          ? styles.customInput + " " + styles.customInputError
          : styles.customInput
      }
      type="textarea"
    />
  );
}
