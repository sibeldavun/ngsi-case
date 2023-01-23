import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import NavbarLogo from "../../components/NavbarLogo";
import rectangle from "../../assets/Login/Rectangle4.png";
import FooterTitle from "../../components/FooterTitle";
function SignIn() {
  useEffect(() => {
    document.title = "Sign In";
  }, []);

  return (
    <div className="container-fluid min-vh-100">
      <div className="row">
        <div className="col-12 col-md-6">
          <div
            className={`container d-flex flex-column vh-100 ${styles.loginContainer}`}
          >
            <div className="row w-100 mw-100 mt-5">
              <NavbarLogo />
            </div>
            <div className="row d-flex justify-content-center mt-5 mb-5">
              <form>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="inputEmail" className="form-label">
                    E-MAIL
                  </label>
                  <input
                    type="email"
                    className={styles.formInput}
                    id="inputEmail"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="inputPassword" className="form-label">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    className={styles.formInput}
                    id="inputPassword"
                  />
                </div>
                <button
                  type="submit"
                  className={`btn btn-dark w-100 mt-2 ${styles.formButton}`}
                >
                  SING IN
                </button>
              </form>
            </div>
            <div className="row mt-4 d-flex text-center flex-row">
              <div className="col-8 d-flex justify-content-end">
                <p className="w-60 d-flex justify-content-end">
                  Don't you have an account?
                </p>
              </div>
              <div className="col-4 d-flex justify-content-start">
                <Link style={{ textDecoration: "none", marginLeft: "10px" }}>
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="row align-items-end h-50">
              <div>
                <FooterTitle />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 d-md-block d-none vh-100 p-0">
          <img src={rectangle} alt="sas" className="w-100 h-100" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
