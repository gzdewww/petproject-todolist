import CustomInput from "../../UI/CustomInput/CustomInput";
import styles from "./SideBarItem.module.css";
import { BsXLg } from "react-icons/bs";

export default function SideBarItem({
  icon,
  value,
  deletable,
  active,
  onClick,
  onRemove,
  onChange,
}) {
  return (
    <div className={styles.item} onClick={onClick}>
      {icon}
      {deletable ? (
        <>
          <CustomInput
            className={styles.itemTitle}
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
          />
          <BsXLg className={styles.delete} onClick={onRemove} />
        </>
      ) : (
        <p className={styles.itemTitle}>{value}</p>
      )}
    </div>
  );
}
