import React, { useState } from "react";
import ListItem from "../ListItem/ListItem.jsx";
import style from "./List.module.css";
import CustomButton from "../../UI/CustomButton/CustomButton.jsx";
import CustomForm from "../../UI/CustomForm/CustomForm.jsx";
import CustomInput from "../../UI/CustomInput/CustomInput.jsx";
import { BsPlusSquareFill } from "react-icons/bs";

export default function List({ items, onAdd, onDelete, onToggle }) {
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
    <>
      {/* Form for adding a new task */}
      <CustomForm onSubmit={handleSubmit}>
        <CustomInput
          onChange={(event) => {
            setInputValue(event.target.value);
            if (error) setError("");
          }}
          placeholder={"Введите задачу..."}
          value={inputValue}
          error={error}
        />
        <CustomButton type="submit">Добавить</CustomButton>
      </CustomForm>

      {/* Render each list item */}
      <ul className={style.list}>
        {items.map((task) => {
          return (
            <ListItem
              key={task.id}
              id={task.id}
              value={task.value}
              done={task.done}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </>
  );
}
