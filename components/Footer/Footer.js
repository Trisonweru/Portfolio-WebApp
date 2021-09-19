import React, { useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import {
  UilTwitterAlt,
  UilLinkedinAlt,
  UilWhatsapp,
  UilGithub,
  UilCopy,
} from "@iconscout/react-unicons";

function Footer() {
  const [copyText, setCopyText] = useState("isaactrisonwaweru@gmail.com");
  const [copyClicked, setCopyClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const copyCat = () => {
    navigator.clipboard.writeText(copyText);
    setCopyClicked(true);
  };
  const hoverFunc = () => {
    setTimeout(() => {
      setHovered(!hovered);
    }, 200);
  };
  const hoverFunc1 = () => {
    setHovered(false);
  };
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.copyEmail}>
        <div
          className={styles.input_wrapper}
          onMouseEnter={hoverFunc}
          onMouseLeave={hoverFunc1}
        >
          <div onClick={copyCat} className={styles.inputdiv}>
            <input
              disabled
              value={copyClicked ? "Copied!" : copyText}
              className={copyClicked ? styles.input_clicked : styles.input}
            />
            <span className={styles.clickToCopy}>
              {hovered ? "Click to copy" : ""}
            </span>
          </div>
          <div className={styles.copyIcon} onClick={copyCat}>
            <UilCopy size="25px" color="#fff" />
          </div>
        </div>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.footer_title}>{"Social"}</div>
        <div className={styles.icon_wrapper}>
          <div className={styles.icon_container}>
            <a
              href="https://github.com/Trisonweru?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UilGithub size="25px" color="#fff" />
            </a>
          </div>
          <div className={styles.icon_container}>
            <a
              href="https://twitter.com/TrisonWaweru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UilTwitterAlt size="25px" color="#fff" />
            </a>
          </div>
          <div className={styles.icon_container}>
            <a
              href="https://www.linkedin.com/in/isaac-waweru-6b7877167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UilLinkedinAlt size="25px" color="#fff" />
            </a>
          </div>
          <div className={styles.icon_container}>
            <Link href="https://wa.me/2540705992717" passHref={true}>
              <UilWhatsapp size="25px" color="#fff" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
