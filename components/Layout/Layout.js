import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navigation from "./Navigation";
import styles from "./Navigation.module.css";
import { UilTopArrowToTop } from "@iconscout/react-unicons";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";
function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [back_topClicked, setBack_topClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(function onFirstMount() {
    const scroll = (event) => {
      if (window.scrollY > 0) {
        setScrolled(true);
        setIsVisible(true);
      } else {
        setScrolled(false);
        setIsVisible(false);
        setBack_topClicked(false);
      }
    };
    window.addEventListener("scroll", scroll, false);
  }, []);

  useEffect(
    function () {
      const scroll_top = (event) => {
        if (back_topClicked) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
      };
      scroll_top();
    },
    [back_topClicked]
  );
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navigation toggle={toggle} scrolled={scrolled} />
      {isVisible ? (
        <div
          className={styles.back_top}
          id="top"
          onClick={() => setBack_topClicked(true)}
        >
          <UilTopArrowToTop size="30" color="#fff" />
        </div>
      ) : (
        ""
      )}
      <main>{props.children}</main>
      <Footer />
      <MobileNav />
    </>
  );
}

export default Layout;
