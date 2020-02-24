import React from "react";
import Styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const User = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div>
            <NavLink to={path} className={Styles.user}>{props.name}</NavLink>
        </div>
    )
};

const DialogMessage = (props) => {


    return (
        <div>
            <div className="dialog-message">{props.message}</div>
        </div>
    )
};

const Dialogs = (props) => {
    let users = [
        {name: 'Andrey', id: 1},
        {name: 'Vasya', id: 2},
        {name: 'Jorik', id: 3},
        {name: 'Vova', id: 4},
    ];

    let dialogs = [
        {message: 'Здорова, как дела?'},
        {message: 'Нормас'},
        {message: 'Прикольная авка'},
        {message: 'Почему не отвечаешь?'},
    ];

    return (
        <div className={Styles.dialogWrapper}>
            <div className={Styles.users}>
                <User name={users[0].name} id={users[0].id} />
                <User name={users[1].name} id={users[1].id} />
                <User name={users[2].name} id={users[2].id} />
                <User name={users[3].name} id={users[3].id} />
            </div>
            <div className={Styles.dialog}>
                <DialogMessage message={dialogs[0].message} />
                <DialogMessage message={dialogs[0].message} />
                <DialogMessage message={dialogs[0].message} />
                <DialogMessage message={dialogs[0].message} />
            </div>
        </div>

    )
};

export default Dialogs;