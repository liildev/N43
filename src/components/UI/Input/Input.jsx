import React from "react";
import styles from "./Input.module.css";

export default function ({ ...props }) {
  return <input className={styles.input} {...props} />;
}
