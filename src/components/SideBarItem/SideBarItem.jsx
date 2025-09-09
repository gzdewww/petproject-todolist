import { useState } from "react";
import CustomButton from "../../UI/CustomButton/CustomButton";
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
  const [isEditing, setIsEditing] = useState(false);

  return (
    <CustomButton
      className={`${styles.item} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {icon}
      {isEditing ? (
        <CustomInput
          className={styles.itemTitle}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        ></CustomInput>
      ) : (
        <span className={styles.itemTitle}>{value}</span>
      )}
      {custom ? (
        <BsXLg
          className={styles.delete}
          onClick={(event) => {
            event.stopPropagation();
            onRemove();
          }}
        />
      ) : (
        ""
      )}
    </CustomButton>
  );
}

// {icon}
// {custom ? (
//   <>
//     <CustomInput
//       className={styles.itemTitle}
//       value={value}
//       onChange={(event) => {
//         onChange(event.target.value);
//       }}
//       readOnly={!editing}
//       onClick={(e) => {
//         e.target.blur();
//         e.preventDefault();
//       }}
//     />
//     <BsXLg
//       className={styles.delete}
//       onClick={(event) => {
//         event.stopPropagation();
//         onRemove();
//       }}
//     />
//   </>
// ) : (
//   <span className={styles.itemTitle}>{value}</span>
// )}
