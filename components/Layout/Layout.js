import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navigation from "./Navigation";
import styles from "./Navigation.module.css";
import { UilTopArrowToTop } from "@iconscout/react-unicons";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";
import { motion } from "framer-motion";
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
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className=""
    >
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
    </motion.div>
  );
}

export default Layout;
