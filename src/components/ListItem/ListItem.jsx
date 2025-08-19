import style from "./ListItem.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

export default function ListItem({ id, value, done, onToggle, onDelete }) {
  console.log(`rendered ${value} with id ${id}`);
  return (
    <li className={`${style.listItem} ${done ? style.completed : ""}`}>
      <BsFilter className={style.filterButton} />
      <input
        className={style.checkbox}
        type="checkbox"
        checked={done}
        onChange={() => onToggle(id)}
      />
      <textarea
        className={style.text}
        value={value}
        onChange={() => {}}
      ></textarea>
      <AiOutlineClose
        aria-label="Удалить задачу"
        className={style.deleteButton}
        onClick={() => onDelete(id)}
      />
    </li>
  );
}
