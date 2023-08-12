import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>TaskHub</h1>
        <Image src="/images/logo.png" alt="image-logo" width={40} height={40}></Image>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
