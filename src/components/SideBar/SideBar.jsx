import React from "react";
import styles from "./SideBar.module.css";
import {
  BsLayoutSidebar,
  BsPersonCircle,
  BsSearch,
  BsCalendar2Date,
  BsCalendarMonth,
} from "react-icons/bs";
import SideBarItem from "../SideBarItem/SideBarItem";

export default function SideBar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <BsPersonCircle className={styles.userIcon} />
          <BsLayoutSidebar className={styles.toggleSidebar} />
        </div>
        <div className={styles.sidebarContent}>
          <SideBarItem>
            <BsSearch />
            <p>Поиск</p>
          </SideBarItem>
          <SideBarItem>
            <BsCalendar2Date />
            <p>Сегодня</p>
          </SideBarItem>
          <SideBarItem>
            <BsCalendarMonth />
            <p>Предстоящее</p>
          </SideBarItem>
        </div>
      </aside>
    </>
  );
}
