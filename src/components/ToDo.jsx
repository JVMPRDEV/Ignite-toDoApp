import { Trash } from "phosphor-react";
import styles from "./ToDo.module.css";
import { Checkbox } from "./CheckBox";
import { useState } from "react";

export function ToDo({ id, content, onDeleteTask, onMarkTask }) {
  const [checked, setChecked] = useState(false);
  const currentBox = (!checked).toString();

  const handleChange = () => {
    setChecked(!checked);
    onMarkTask(currentBox);
  };

  function handleDeleteTask() {
    onDeleteTask(id, currentBox);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <div className={styles.taskContent}>
          <main>
            <Checkbox
              value={checked}
              onChange={handleChange}
              title="Marcar Tarefa"
            />

            <p>{content}</p>

            <button onClick={handleDeleteTask} title="Deletar Tarefa">
              <Trash size={24} />
            </button>
          </main>
        </div>
      </div>
    </div>
  );
}
