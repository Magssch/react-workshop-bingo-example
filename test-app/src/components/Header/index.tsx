import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.headerLink}>
        Tilbake til start
      </Link>
      <p className={styles.headerText}>{children}</p>
    </header>
  );
};

export default Header;
