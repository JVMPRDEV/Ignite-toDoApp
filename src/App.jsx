import styles from "./App.module.css";
import { Header } from "./components/Header";
import { CheckList } from "./components/CheckList";
import "./global.css";

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
