import { useEffect, useRef, useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./CustomSelect.module.css";
import { nanoid } from "nanoid";

export default function CustomSelect({
  options,
  value,
  placeholder,
  onChange,
}) {
  const [expanded, setExpanded] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const refContainer = useRef(null);
  const refButton = useRef(null);
  const selectId = nanoid();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!expanded) {
        const currentIndex = options.findIndex((item) => item.value === value);
        setHighlightedIndex(currentIndex >= 0 ? currentIndex : -1);
        setExpanded(true);
      } else {
        if (highlightedIndex >= 0) {
          onChange(options[highlightedIndex].value);
        }
        setExpanded(false);
      }
    }

    if (event.key === "ArrowDown" || event.code === "KeyS") {
      event.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % options.length);
    }

    if (event.key === "ArrowUp" || event.code === "KeyW") {
      event.preventDefault();
      setHighlightedIndex(
        (prev) => (prev - 1 + options.length) % options.length
      );
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setExpanded(false);
      refButton.current?.focus();
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (
        refContainer.current &&
        !refContainer.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={refContainer} className={styles.container}>
      <CustomButton
        ref={refButton}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={expanded}
        aria-controls={selectId}
        className={`${styles.button} ${expanded ? styles.buttonExpanded : ""}`}
        onKeyDown={handleKeyDown}
        onClick={() => {
          setExpanded((prev) => !prev);
        }}
      >
        {options.find((item) => item.value === value)?.label || placeholder}
        <BsCaretDownFill />
      </CustomButton>
      <ul
        role="listbox"
        id={selectId}
        className={`${styles.options} ${expanded ? styles.optionsShow : ""}`}
      >
        {options.map((option, index) => (
          <li
            role="option"
            aria-selected={option.value === value}
            key={option.value}
            className={`${styles.item} ${
              index === highlightedIndex ? styles.highlighted : ""
            }`}
            onClick={() => {
              onChange(option.value);
              setExpanded(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
