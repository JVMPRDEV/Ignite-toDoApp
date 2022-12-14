import { Header } from "./components/Header";
import { CheckList } from "./components/CheckList";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.principalContent}>
        <CheckList />
      </div>
    </div>
  );
}
