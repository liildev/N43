import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ visible, setVisible, children }) {
  const classes = [styles.modal];

  if (visible) {
    classes.push(styles.active);
  }
  return (
    <div className={classes.join(" ")} onClick={() => setVisible(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
