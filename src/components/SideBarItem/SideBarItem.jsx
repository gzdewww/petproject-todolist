import CustomInput from "../../UI/CustomInput/CustomInput";
import styles from "./SideBarItem.module.css";
import { BsXLg } from "react-icons/bs";

export default function SideBarItem({
  icon,
  value,
  custom,
  active,
  onClick,
  onRemove,
  onChange,
}) {
  return (
    <div
      className={`${styles.item} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {icon}
      {custom ? (
        <>
          <CustomInput
            className={styles.itemTitle}
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
            readOnly={!active}
          />
          <BsXLg
            className={styles.delete}
            onClick={(event) => {
              event.stopPropagation();
              onRemove();
            }}
          />
        </>
      ) : (
        <p className={styles.itemTitle}>{value}</p>
      )}
    </div>
  );
}
