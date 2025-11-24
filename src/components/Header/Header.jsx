import React, { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        {/* Логотип */}
        <div className="header__logo">
          <Logo />
        </div>

        {/* Бургер-меню (только на мобильных) */}
        <button
          className="header__burger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Навигация */}
        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <NavBar />
        </nav>
      </div>
    </header>
  );
};

export default Header;