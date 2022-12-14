import { Circle, CheckCircle } from "phosphor-react";

import styles from "./CheckBox.module.css";

export const Checkbox = ({ value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      <span>
        {value === false ? (
          <Circle size={24} className={styles.uncheckedIcon} />
        ) : (
          <CheckCircle size={24} className={styles.checkedIcon} />
        )}
      </span>
    </label>
  );
};
