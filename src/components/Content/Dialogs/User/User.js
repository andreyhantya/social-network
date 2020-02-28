import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";


const User = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div>
            <NavLink to={path} className={s.user}>{props.name}</NavLink>
        </div>
    )
};
export default User;