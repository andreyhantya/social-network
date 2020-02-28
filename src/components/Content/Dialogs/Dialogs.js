import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import User from "./User/User";

const Dialogs = (props) => {

    return (
        <div className={s.dialogWrapper}>ё
            <div className={s.users}>
                {props.users.map((user) => {
                    return <User name={user.name} id={user.id}/>
                })}
            </div>
            <div className={s.dialog}>
                {props.dialogs.map(d => {
                    return <DialogItem message={d.message}/>
                })}
            </div>
        </div>

    )
};

export default Dialogs;