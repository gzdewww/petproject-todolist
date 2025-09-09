import { useState } from "react";
import styles from "./SideBar.module.css";
import {
  BsLayoutSidebar,
  BsPersonCircle,
  BsSearch,
  BsCalendar2Date,
  BsCalendarMonth,
  BsListTask,
  BsJournalCheck,
  BsPlusSquare,
  BsList,
} from "react-icons/bs";
import SideBarItem from "../SideBarItem/SideBarItem";
import CustomButton from "../../UI/CustomButton/CustomButton";

export default function SideBar({
  lists,
  activeList,
  setActiveList,
  addList,
  removeList,
  editList,
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <CustomButton>
            <BsPersonCircle />
            <span className={styles.userName}>UserName</span>
          </CustomButton>
          <CustomButton onClick={() => setHidden((prev) => !prev)}>
            <BsLayoutSidebar />
          </CustomButton>
        </div>
        <div
          className={`${styles.sidebarContent} ${hidden ? styles.hidden : ""}`}
        >
          {lists.map((list) => (
            <SideBarItem
              key={list.id}
              icon={<BsJournalCheck className={styles.icon} />}
              value={list.title}
              custom
              active={list.id === activeList}
              onRemove={() => removeList(list.id)}
              onClick={() => {
                setActiveList(list.id);
              }}
              onChange={(newTitle) => {
                editList(list.id, newTitle);
              }}
            />
          ))}
          <SideBarItem
            icon={<BsPlusSquare className={styles.icon} />}
            value={"Добавить"}
            onClick={() => addList("Новый список")}
          />
        </div>
      </aside>
    </>
  );
}
