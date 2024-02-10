"use client";
import styles from "./button.module.css";
function Button() {
  return (
    <button
      className={styles.logout}
      onClick={() => {
        console.log("logout");
      }}
    >
      Logout
    </button>
  );
}

export default Button;
