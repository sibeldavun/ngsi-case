import React from "react";
import pumaLogo from "../../assets/pumaLogo.png";
import styles from "./styles.module.css";

function NavbarLogo() {
  return (
    <React.Fragment>
      <div
        className={`col-6 ${styles.navbarLogoBorder} ${styles.item} d-flex justify-content-end`}
      >
        <img
          src={pumaLogo}
          alt="sas"
          style={{
            width: "fit-content",
            maxWidth: "90%",
            height: "fit-content",
          }}
          className="mt-4 mb-4 me-3"
        />
      </div>
      <div className={`col-6 ${styles.item} mt-4`}>
        <p className={`${styles.logoTitle} ms-3`}>EXCLUSIVE</p>
      </div>
    </React.Fragment>
  );
}

export default NavbarLogo;
