import React from "react";
import pumaLogo from "../../assets/pumaLogo.png";
import FooterTitle from "../FooterTitle";

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <img src={pumaLogo} alt="foto" className="mt-4 mb-4" />
        </div>
        <div className="col-12 d-flex flex-column">
          <FooterTitle/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
