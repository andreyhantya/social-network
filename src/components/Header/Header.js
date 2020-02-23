import React from "react";
import Styles from "./Header.module.css"

const Header = () => {
    const {header} = Styles;
  return (
      <header className={header}>
          <h1>Социальная</h1>
      </header>
  )
};

export default Header;