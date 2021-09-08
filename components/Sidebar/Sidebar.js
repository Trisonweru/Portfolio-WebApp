import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { UilGithub, UilMultiply } from "@iconscout/react-unicons";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/router";
import * as data from "../../data/data";

function Sidebar({ toggle, isOpen }) {
  const router = useRouter();
  return (
    <div className={isOpen ? styles.wrapper2 : styles.wrapper} onClick={toggle}>
      <div className={styles.mobi_close} onClick={toggle}>
        <UilMultiply size="30" color="#fff" />
      </div>

      <nav className={styles.nav_wrapper}>
        <ul>
          {data.menu.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  router.pathname === item.path
                    ? styles.list_item_active
                    : styles.list_item
                }
              >
                <Link href={item.path} onClick={toggle}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.git_icon}>
        <Link href="https://github.com/Trisonweru?tab=repositories">
          <UilGithub size="30" color="#424141" />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
