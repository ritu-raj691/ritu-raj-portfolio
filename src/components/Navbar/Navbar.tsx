import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { INavbarItems } from "../../models/common";
import { NavbarItems } from "../../constant";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menubtn}
          src={isMenuOpen ? closeIcon : menuIcon}
          alt="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ul
          className={`${styles.menuitems} ${isMenuOpen && styles.menuopen}`}
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
        >
          {NavbarItems.map((item: INavbarItems, index: number) => {
            return (
              <li key={`navitem_${index + 1}`}>
                <a href={item?.href} rel="noreferrer">
                  {item?.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
