import { motion } from "framer-motion";
import styles from "./withTransition.module.css";

const withTransition = (OriginalComponent) => {
  const MyComp = () => (
    <>
      <OriginalComponent />
      {/* <motion.div
        className={styles.slide_in}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className={styles.quoteDiv}>
          <span
            className={styles.quote}
          >{`"Positivity always wins. Always"`}</span>
          <div className={styles.authorDiv}>{`-Gary Vaynerchuk-`}</div>
        </div>
      </motion.div> */}
      <motion.div
        className={styles.slide_out}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
  MyComp.displayName = "Anime";
  return MyComp;
};

export default withTransition;
