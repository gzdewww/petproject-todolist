import style from "./ListItem.module.css";
import { BsFilter, BsXLg } from "react-icons/bs";

export default function ListItem({ value, done, onToggle, onDelete }) {
  console.log(`rendered ${value}`);
  return (
    <li className={`${style.listItem} ${done ? style.completed : ""}`}>
      <BsFilter className={style.filterButton} />
      <input
        className={style.checkbox}
        type="checkbox"
        checked={done}
        onChange={onToggle}
      />
      <p className={style.text}>{value}</p>
      <BsXLg
        aria-label="Удалить задачу"
        className={style.deleteButton}
        onClick={onDelete}
      />
    </li>
  );
}
