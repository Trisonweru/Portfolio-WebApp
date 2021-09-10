import { motion } from "framer-motion";
import styles from "./withTransition.module.css";

export default function withTransition(OriginalComponent) {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className={styles.slide_in}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className={styles.slide_out}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </>
  );
}
