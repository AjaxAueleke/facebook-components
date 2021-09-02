import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <div className="user">
      <div className="user__image">
        <img src={props.img} alt={props.name} className="user__image" />
      </div>
      <div className="user__details">
        <p className="user__name">{props.name}</p>
        <p className="user__date">{`${props.date.getDate()}/${
          props.date.getMonth() + 1
        }/${props.date.getFullYear()}`}</p>
      </div>
    </div>
  );
};

export default User;
