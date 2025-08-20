import { useState } from "react";
import CustomButton from "../../UI/CustomButton/CustomButton.jsx";
import CustomForm from "../../UI/CustomForm/CustomForm.jsx";
import CustomInput from "../../UI/CustomInput/CustomInput.jsx";
import { BsPlusLg } from "react-icons/bs";
import styles from "./FormTask.module.css";

export default function FormTask({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setError("Поле не должно быть пустым");
      return;
    }
    onAdd(inputValue.trim());
    setInputValue("");
    setError("");
  };

  return (
    <CustomForm className={styles.form} onSubmit={handleSubmit}>
      <CustomInput
        onChange={(event) => {
          setInputValue(event.target.value);
          if (error) setError("");
        }}
        placeholder={"Введите задачу..."}
        value={inputValue}
        error={error}
      />
      <CustomButton className={styles.button} type="submit">
        <BsPlusLg />
      </CustomButton>
    </CustomForm>
  );
}
