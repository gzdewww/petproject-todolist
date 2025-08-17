import React, { useState } from "react";
import ListItem from "../ListItem/ListItem.jsx";
import CustomButton from "../../UI/CustomButton/CustomButton.jsx";
import CustomForm from "../../UI/CustomForm/CustomForm.jsx";
import CustomInput from "../../UI/CustomInput/CustomInput.jsx";import { BsPlusSquareFill } from "react-icons/bs";

export default function List(props) {
  const [listItemArray, setListItemArray] = useState(props.itemArray || []);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const addNewItem = (text) => {
    setListItemArray([...listItemArray, text]);
  };

  const deleteItem = (index) => {
    setListItemArray((listItemArray) =>
      listItemArray.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      {/* Form for adding a new task */}
      <CustomForm>
        <CustomInput
          type="text"
          placeholder="Введите новое дело"
          value={inputValue}
          error={error}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <CustomButton
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            if (!inputValue) {
              setError(true);
              setTimeout(() => {
                setError(false);
              }, 1000);
              return;
            }
            addNewItem(inputValue);
            setInputValue("");
          }}
        >
          Добавить дело
        </CustomButton>
      </CustomForm>

      {/* Render each list item */}
      {listItemArray.map((item, index) => {
        {
          /* Render each list item */
        }
        return (
          <ListItem
            onDelete={deleteItem}
            key={index}
            value={item}
            id={index}
          ></ListItem>
        );
      })}
    </>
  );
}
