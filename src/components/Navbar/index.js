import React from "react";
import NavbarLogo from "../NavbarLogo";
import cart from "../../assets/cart.png";
import menu from "../../assets/bar-chart.svg";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className="col-4 d-flex justify-content-start">
          <div className="d-flex align-items-center">
            <img
              src={menu}
              alt="sas"
              style={{ width: "100%", height: "fit-content" }}
            />
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center mt-2">
          <NavbarLogo />
        </div>
        <div className="col-4  d-flex  justify-content-end mt-2">
          <div className="d-flex align-items-center w-100 justify-content-end">
            <img
              src={cart}
              alt="sas"
              style={{
                width: "fit-content",
                height: "fit-content",
                maxWidth: "25%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
