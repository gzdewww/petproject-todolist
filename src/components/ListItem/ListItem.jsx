import style from "./ListItem.module.css";
import { BsFilter, BsXLg } from "react-icons/bs";
import CustomInput from "../../UI/CustomInput/CustomInput";

export default function ListItem({
  value,
  done,
  onToggle,
  onDelete,
  onChange,
}) {
  // console.log(`rendered ${value}`);
  return (
    <li className={`${style.listItem} ${done ? style.completed : ""}`}>
      <BsFilter className={style.filterButton} />
      <input
        className={style.checkbox}
        type="checkbox"
        checked={done}
        onChange={onToggle}
      />
      <CustomInput
        className={style.text}
        value={value}
        onChange={(event) => {
          console.log(event.target.value);
          onChange(event.target.value);
        }}
      ></CustomInput>
      <BsXLg
        aria-label="Удалить задачу"
        className={style.deleteButton}
        onClick={onDelete}
      />
    </li>
  );
}
