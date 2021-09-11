import Link from "next/link";
import { UilGithub, UilBars } from "@iconscout/react-unicons";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";
import * as data from "../../data/data";

function Navigation({ toggle, scrolled }) {
  const router = useRouter();
  return (
    <div className={scrolled ? styles.header : styles.header_scrolled}>
      <div className={styles.wrapper}>
        <Link href="/">
          <h1 className={styles.Logo}>Isaac Waweru</h1>
        </Link>
        <div className={styles.mobi_bars} onClick={toggle}>
          <UilBars size="30" color="#fff" />
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
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.rear_nav}>
          <div className={styles.git_icon}>
            <Link
              href="https://github.com/Trisonweru?tab=repositories"
              target="blank"
            >
              <UilGithub
                size="30"
                color={
                  scrolled || router.pathname !== "/"
                    ? "#424141"
                    : "rgba(255,255,255,0.7)"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
