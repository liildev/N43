import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ pages, page, setPage }) => {
  return (
    <div className={styles.page__wrapper}>
      {pages.map((p) => (
        <span
          key={p}
          className={
            p === page
              ? [styles.page, styles.page__current].join(" ")
              : styles.page
          }
          onClick={() => setPage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
