import React from "react";
import styles from "./SideBar.module.css";
import {
  BsLayoutSidebar,
  BsPersonCircle,
  BsSearch,
  BsCalendar2Date,
  BsCalendarMonth,
  BsListTask,
} from "react-icons/bs";
import SideBarItem from "../SideBarItem/SideBarItem";

export default function SideBar({ lists }) {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <BsPersonCircle className={styles.userIcon} />
          <BsLayoutSidebar className={styles.toggleSidebar} />
        </div>
        <div className={styles.sidebarContent}>
          <SideBarItem value={"Сегодня"}>
            <BsCalendar2Date className={styles.icon} />
          </SideBarItem>
          <SideBarItem value={"Ближайшие"}>
            <BsCalendarMonth className={styles.icon} />
          </SideBarItem>
          {lists ? (
            <SideBarItem value={"Мои списки"} lists={lists}>
              <BsListTask className={styles.icon} />
            </SideBarItem>
          ) : (
            ""
          )}
        </div>
      </aside>
    </>
  );
}
