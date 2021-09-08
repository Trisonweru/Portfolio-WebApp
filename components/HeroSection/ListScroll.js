import React, { useRef, useEffect } from "react";
import styles from "./HeroSection.module.css";
import { UilCheck } from "@iconscout/react-unicons";
import ReactCardCarousel from "react-card-carousel";
import { services } from "../../data/data";

function Card() {
  return (
    <>
      <div className={styles.services_div}>
        <h2 className={styles.Services} id="services">
          Services
        </h2>
      </div>

      <div className={styles.Container}>
        <div className={styles.List}>
          <ReactCardCarousel autoplay={true} autoplay_speed={7000}>
            {services.map((item, index) => (
              <div className={styles.card_wrapper} key={index}>
                <div className={styles.lines_through}></div>
                <div className={styles.lines_through2}></div>
                <div className={styles.Card}>
                  <div className={styles.card_content_wrapper}>
                    <h2 className={styles.card_title}>{item.title} </h2>
                    <p className={styles.techs}>
                      <span className={styles.dash}>-</span> {item.technologies}
                    </p>
                    <ul className={styles.ul}>
                      {item.description.map((item2, index) => (
                        <li className={styles.desc_list} key={index}>
                          <div className={styles.service_icon}>
                            <UilCheck size="23px" color="#fff" />
                          </div>
                          <div className={styles.service_item}>
                            {item2.item}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </ReactCardCarousel>
        </div>
      </div>
    </>
  );
}
export default Card;
