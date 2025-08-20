import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./CustomSelect.module.css";

export default function CustomSelect({
  options,
  value,
  placeholder,
  onChange,
}) {
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className={styles.container}>
      <CustomButton
        className={`${styles.button} ${expanded ? styles.selectExpanded : ""}`}
        onClick={() => {
          console.log("hello");
          setExpanded(!expanded);
        }}
      >
        {text || placeholder}
        <BsCaretDownFill />
      </CustomButton>
      <div className={`${styles.options} ${expanded ? styles.show : ""}`}>
        {options.map((option) => (
          <label
            key={option.value}
            className={styles.item}
            onClick={() => {
              onChange(option.value);
              setExpanded(false);
              setText(option.label);
            }}
          >
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
