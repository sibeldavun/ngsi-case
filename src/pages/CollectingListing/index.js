import React, { useEffect } from "react";
import item01 from "../../assets/CollectionListing/item-01.png";
import item02 from "../../assets/CollectionListing/item-02.png";
import item03 from "../../assets/CollectionListing/item-03.png";
import styles from "./styles.module.css";
import rectangle1 from "../../assets/CollectionListing/rectangle-1.png";
import rectangle2 from "../../assets/CollectionListing/rectangle-2.png";
import item1 from "../../assets/CollectionListing/item-1.png";
import item2 from "../../assets/CollectionListing/item-2.png";
import item3 from "../../assets/CollectionListing/item-3.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Carousel } from "react-bootstrap";

function CollectionListing() {
  useEffect(() => {
    document.title = "Collection Listing";
  }, []);

  const data = [
    {
      images: [item01, item02, item03],
      text: "PUMA X PERKS AND MINI",
      subText: "View Collection",
    },
    {
      images: [rectangle1, rectangle2],
      text: "PUMA X POKEMON",
      subText: "View Collection",
    },
    {
      images: [item1, item2, item3],
      text: "PUMA X CHILDHOOD DREAMS",
      subText: "View Collection",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.container}`}>
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Carousel
                className={`mt-5 h-100 ${styles.carouselItems}`}
                interval={null}
              >
                {item.images.map((image, imageIndex) => {
                  return (
                    <Carousel.Item key={imageIndex}>
                      <img
                        src={image}
                        alt="foto"
                        style={{
                          maxWidth: "100%",
                          width: "100%",
                          height: "500px",
                        }}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              <div className={`row mt-5 ${styles.items}`}>
                {item.images.map((image, imageIndex) => {
                  return (
                    <div
                      className={`col-${12 / item.images.length} mt-5`}
                      key={imageIndex}
                    >
                      <img
                        src={image}
                        alt="foto"
                        style={{
                          maxWidth: "100%",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="row text-center mt-5 ">
                <p className={styles.collectingListingText}>{item.text}</p>
                <p className={styles.collectingListingSubText}>
                  {item.subText}
                </p>
              </div>
              <hr className={styles.hr} />
            </React.Fragment>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default CollectionListing;
