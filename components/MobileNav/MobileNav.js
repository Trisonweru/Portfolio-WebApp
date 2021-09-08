import React, { useState, useEffect } from "react";
import styles from "./MobileNav.module.css";
import { UilApps, UilMultiply } from "@iconscout/react-unicons";
import Link from "next/link";
import { menu } from "../../data/data";

function MobileNav() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    setClicked(false);
  }, []);
  return (
    <div className={styles.MobileNavWrapper}>
      {clicked ? (
        <div className={styles.TopBottomNav} onClick={handleClick}>
          {menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <div className={styles.ItemWrapper} onClick={handleClick}>
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className={styles.LastNav}>
        <div className={styles.MobileLogo}>
          <Link href="/">
            <h1 className={styles.LogoLink}>Isaac Waweru</h1>
          </Link>
        </div>
        <div className={styles.MobileNavicon} onClick={handleClick}>
          {clicked ? (
            <UilMultiply size="25px" color="#fff" />
          ) : (
            <UilApps size="25px" color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
