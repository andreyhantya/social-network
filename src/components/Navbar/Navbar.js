import React from "react";
import Styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    const {nav, item, active} = Styles;
    return (
        <nav className={nav}>
            <div className={item}>
                <NavLink to="/profile" activeClassName={active}>Профиль</NavLink>
            </div>
            <div className={item}>
                <NavLink to='/friends' activeClassName={active}>Друзья</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/dialogs" activeClassName={active}>Сообщения</NavLink>
            </div>
            <div className={item}>
                <NavLink to='/news' activeClassName={active}>Новости</NavLink>
            </div>
            <div className={item}>
                <NavLink to='/settings' activeClassName={active}>Настройки</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;