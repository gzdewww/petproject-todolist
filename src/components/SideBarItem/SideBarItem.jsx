import styles from "./SideBarItem.module.css";
import { BsXLg } from "react-icons/bs";

export default function SideBarItem({
  icon,
  value,
  onClick,
  onRemove,
  deletable,
}) {
  return (
    <div className={styles.item} onClick={onClick}>
      {icon}
      <p className={styles.itemTitle}>{value}</p>
      {deletable ? <BsXLg className={styles.delete} onClick={onRemove} /> : ""}
    </div>
  );
}
