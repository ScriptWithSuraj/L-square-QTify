import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search({ placeHolder }) {
  return (
    <div className={styles.searchWrapper}>
      <input className={styles.search} placeholder={placeHolder} />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default Search;
