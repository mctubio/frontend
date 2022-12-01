import React from "react";
import '../../styles/components/layout/Header.css'

const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <img src="images/arbol.png" alt="logo" />
        <h1>Salud Integral Infantil</h1>
      </div>
    </header>
  );
};

export default Header;
