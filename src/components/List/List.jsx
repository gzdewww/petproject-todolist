import React from "react";
import ListItem from "../ListItem/ListItem.jsx";

export default function List(props) {
  return (
    <div className="content">
      {props.listItemArray.map((item, index) => {
        return <ListItem key={index} text={item} id={index} ></ListItem>;
      })}
      <div className="block"></div>
    </div>
  );
}
