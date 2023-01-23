import React from "react";
import styles from "./styles.module.css";

function FooterTitle() {
  return (
    <React.Fragment>
      <p className={`text-xs text-center ${styles.footer}`}>
        ©2022.PUMA Company | All Rights Reserved.
      </p>
      <p className={`text-xs text-center ${styles.footer} mb-5`}>
        Privacy Statement · Privacy Statement
      </p>
    </React.Fragment>
  );
}

export default FooterTitle;
