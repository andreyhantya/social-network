import React from "react";
import Styles from './Navbar.module.css';

const Navbar = () => {
    const {nav, item} = Styles;
  return (
      <nav className={nav}>
          <div className={item}>
              <a>Профиль</a>
          </div>
          <div className={item}>
              <a>Друзья</a>
          </div>
          <div className={item}>
              <a>Сообщения</a>
          </div>
          <div className={item}>
              <a>Новости</a>
          </div>
          <div className={item}>
              <a>Настройки</a>
          </div>
      </nav>
  )
};

export default Navbar;