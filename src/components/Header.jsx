import styles from "./Header.module.css";

import toDoLogo from "../assets/toDo-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="Logotipo da toDo" />
    </header>
  );
}
