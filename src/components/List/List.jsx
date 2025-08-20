import CustomSelect from "../../UI/CustomSelect/CustomSelect.jsx";
import FormTask from "../FormTask/FormTask.jsx";
import ListItem from "../ListItem/ListItem.jsx";
import style from "./List.module.css";

export default function List({
  items,
  onAdd,
  onDelete,
  onToggle,
  onChange,
  filter,
  setFilter,
}) {
  return (
    <>
      {/* Form for adding a new task */}
      <FormTask onAdd={onAdd} />
      {/* Filter */}
      <CustomSelect
        options={[
          { value: "all", label: "Все" },
          { value: "active", label: "Активные" },
          { value: "completed", label: "Завершённые" },
        ]}
        value={filter}
        placeholder={"Фильтр"}
        onChange={setFilter}
      />
      {/* Render each list item */}
      <ul className={style.list}>
        {items.map((task) => {
          return (
            <ListItem
              key={task.id}
              value={task.value}
              done={task.done}
              onToggle={() => onToggle(task.id)}
              onDelete={() => onDelete(task.id)}
              onChange={(text) => onChange(task.id, text)}
            />
          );
        })}
      </ul>
    </>
  );
}
