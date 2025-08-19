import styles from "./SideBarItem.module.css";
import { BsListTask } from "react-icons/bs";

export default function SideBarItem({ value, lists, expanded, children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {children}
        <p className={styles.headerTitle}>{value}</p>
      </header>
      {lists ? (
        <ul>
          {lists.map((list) => (
            <li key={list.id} className={styles.listItem}>
              <BsListTask className={styles.listIcon} />
              <p>{list.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
