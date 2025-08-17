import React from "react";
import styles from "./SideBarItem.module.css";

export default function SideBarItem({ children }) {
  return <div className={styles.sideBarItem}>{children}</div>;
}
