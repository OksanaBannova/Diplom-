// src/components/NavBar.jsx
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link className="nav-link" to="/Diplom-1#about" smooth>
          О нас
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Diplom-1#howItWorks" smooth>
          Как это работает
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Diplom-1#feedback" smooth>
          Отзывы
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Diplom-1#footer" smooth>
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;