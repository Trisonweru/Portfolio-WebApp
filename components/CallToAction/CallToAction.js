import React, { useState } from "react";
import SVG2 from "../../public/Svg-2.svg";
import Image from "next/image";
import { Button } from "../Button/ButtonElements";
import { UilAngleRight, UilArrowRight } from "@iconscout/react-unicons";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "./CallToAction.module.css";

import {
  CallToActionContent,
  CallToActionHeadingWrapper,
  CallToActionHeading,
  CallToActionContentWrapper,
  CallToActionDetails,
  CallToActionButtonWrapper,
} from "./CallToActionElements";
import { useRouter } from "next/router";

function CallToAction() {
  const [hover, setHover] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1.3]);

  const router = useRouter();
  const onHover = () => {
    setHover(!hover);
  };
  const handleClick = () => {
    console.log("clicked");
    router.push("/contact");
  };
  return (
    <div className={styles.calltoactionContainer}>
      <motion.div
        style={{
          scale,
        }}
        className={styles.CallToActionContent}
      >
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
        >
          <CallToActionHeadingWrapper>
            <CallToActionHeading>You have a new project</CallToActionHeading>
          </CallToActionHeadingWrapper>
          <CallToActionContentWrapper>
            <CallToActionDetails>
              Contact me now and get 30% discount on your new project.
            </CallToActionDetails>
          </CallToActionContentWrapper>
          <CallToActionButtonWrapper>
            <button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              className={styles.btn}
              onClick={handleClick}
            >
              <span className={styles.spanElement}></span>
              Contact me {hover ? <UilAngleRight /> : <UilArrowRight />}
            </button>
          </CallToActionButtonWrapper>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CallToAction;
