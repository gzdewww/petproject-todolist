import React from "react";
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
} from "react-icons/bs";
import SideBarItem from "../SideBarItem/SideBarItem";

export default function SideBar({
  lists,
  activeList,
  setActiveList,
  addList,
  removeList,
  editList,
}) {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <BsPersonCircle className={styles.iconHeader} />
          <BsLayoutSidebar className={styles.iconHeader} />
        </div>
        <div className={styles.sidebarContent}>
          <SideBarItem
            icon={<BsCalendar2Date className={styles.icon} />}
            value={"Сегодня"}
          />
          <SideBarItem
            icon={<BsCalendarMonth className={styles.icon} />}
            value={"Ближайшие"}
          />
          <SideBarItem
            icon={<BsPersonCircle className={styles.icon} />}
            value={"Мои списки"}
          />
          <div className={styles.userLists}>
            {lists.map((list) => (
              <SideBarItem
                key={list.id}
                icon={<BsJournalCheck className={styles.icon} />}
                value={list.title}
                deletable
                active={list.id === activeList}
                onRemove={() => removeList(list.id)}
                onClick={() => {
                  setActiveList(list.id);
                  console.log(activeList);
                }}
                onChange={(newTitle) => {
                  editList(list.id, newTitle);
                }}
              />
            ))}
          </div>
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
