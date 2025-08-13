import React from "react";
import style from "./ListItem.module.css";

export default function ListItem(props) {
  const [taskDone, setTaskDone] = React.useState(false);

  const deleteItem = ()=>{
    
  }

  return (
    <div className={`${style.listItem} ${taskDone ? style.completed : ""}`}>
      <input
        className={style.checkbox}
        type="checkbox"
        onChange={() => {
          setTaskDone(!taskDone);
          console.log(taskDone);
        }}
      />
      <span className={style.text}>
        Текст: {props.text} ID: {props.id}{" "}
      </span>
      <button onClick={() => {}} className={style.deleteButton}>
        Удалить
      </button>
    </div>
  );
}
