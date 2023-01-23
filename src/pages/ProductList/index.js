import React, { useEffect } from "react";
import rectangle10 from "../../assets/Product Listing/Rectangle10.png";
import rectangle01 from "../../assets/Product Listing/Rectangle01.png";
import rectangle02 from "../../assets/Product Listing/Rectangle02.png";
import rectangle03 from "../../assets/Product Listing/Rectangle03.png";
import rectangle001 from "../../assets/Product Listing/Rectangle001.png";
import rectangle002 from "../../assets/Product Listing/Rectangle002.png";
import rectangle003 from "../../assets/Product Listing/Rectangle003.png";
import styles from "./styles.module.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function ProductList() {
  useEffect(() => {
    document.title = "Product List";
  }, []);
  const data = [
    {
      images: [
        {
          image: rectangle01,
          text: "PUMA X P.A.M. Men",
          subtext: "Printed T-Shirt",
          price: "70.00 USD",
        },
        {
          image: rectangle02,
          text: "PUMA X P.A.M. Women",
          subtext: "Half Zipper Sweatshirt",
          price: "100.00 USD",
        },
        {
          image: rectangle03,
          text: "PUMA X P.A.M. Men",
          subtext: "Puffer Jacket",
          price: "300.00 USD",
        },
      ],
    },
    {
      images: [
        {
          image: rectangle001,
          text: "PUMA X P.A.M. Men",
          subtext: "Puffer Jacket",
          price: "300.00 USD",
        },
        {
          image: rectangle002,
          text: "PUMA X P.A.M. Men",
          subtext: "Polar Jacket",
          price: "161.00 USD",
        },
        {
          image: rectangle003,
          text: "PUMA X P.A.M. Men",
          subtext: "Cargo Pants",
          price: "159.00 USD",
        },
      ],
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container-fluid w-100 mw-100 p-0 ">
        <div className="row"></div>
        <div className="row mt-5">
          <img src={rectangle10} alt="foto" />
        </div>
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <p className={styles.mainProductText}>
              PUMA X PERKS AND MINI COLLECTION
            </p>
          </div>
        </div>
      </div>
      <div className={`container ${styles.container}`}>
        {data.map((item, index) => {
          return (
            <div className="row mt-5" key={index}>
              {item.images.map((imageInfo, imageInfoIndex) => {
                return (
                  <div className="col-12 col-sm-4 mt-5" key={imageInfoIndex}>
                    <img
                      src={imageInfo.image}
                      alt="foto"
                      style={{ maxWidth: "100%", width: "100%" }}
                    />
                    <p
                      className={`${styles.productListText} text-center mb-0 `}
                    >
                      {imageInfo.text}
                    </p>
                    <p className={`${styles.productListText} text-center mb-0`}>
                      {imageInfo.subtext}
                    </p>
                    <p
                      className={`${styles.productPriceText} text-center mb-0 mt-2`}
                    >
                      {imageInfo.price}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className={`${styles.btn} mb-3 mt-5 btn btn-outline-secondary`}
            >
              BROWSE COLLECTIONS
            </button>
          </div>
        </div>
        <hr className={styles.hr} />
        <Footer />
      </div>
    </div>
  );
}

export default ProductList;
