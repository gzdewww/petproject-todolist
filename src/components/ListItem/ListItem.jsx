import React from "react";
import style from "./ListItem.module.css";
import CustomButton from "../../UI/CustomButton/CustomButton.jsx";
import CustomInput from "../../UI/CustomInput/CustomInput.jsx";
import { AiOutlineClose } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

export default function ListItem(props) {
  const [taskDone, setTaskDone] = React.useState(false);

  return (
    <div className={`${style.listItem} ${taskDone ? style.completed : ""}`}>
      <BsFilter className={style.filterButton}/>
      <input
        className={style.checkbox}
        type="checkbox"
        onChange={() => {
          setTaskDone(!taskDone);
        }}
      />
      <textarea className={style.text}>{props.value}</textarea>
      <AiOutlineClose
        className={style.deleteButton}
        onClick={() => props.onDelete(props.id)}
      />
    </div>
  );
}
