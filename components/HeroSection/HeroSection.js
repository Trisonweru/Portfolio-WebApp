import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import {
  UilTwitterAlt,
  UilLinkedinAlt,
  UilWhatsapp,
  UilGithub,
  UilCopy,
} from "@iconscout/react-unicons";
import image from "../../public/background.svg";
import { UilAngleRight, UilArrowRight } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "./ListScroll";
import { HeroContainer, Video } from "./HeroSectionELements";
import Background from "../../public/HeroBG.jpg";
import FreelanceImage from "../../public/background.svg";

function HeroSection(props) {
  const [hover, setHover] = useState(false);
  const [start, setStart] = useState(false);
  const router = useRouter();
  const onHover = () => {
    setHover(!hover);
  };

  const handleClick = () => {
    router.push("/contact");
    // props.dispatch({ type: "HOME_CLICKED", payload: hover });
    // props.home_click(hover);
  };
  const today = Date().toLocaleString();
  const dateSplit = today.split(" ");
  return (
    <div className={styles.hero_container}>
      {/* <Image
        src={Background}
        alt="Background image"
        objectFit={"fill"}
        className={styles.backgroundImage}
      /> */}
      <div className={styles.bglinear}></div>

      <div className={styles.HeroHeading}>
        <h1 className={styles.headingH1}>
          {
            " I'm Freelance Full-Stack Web Developer Turning Your Ideas Into Fly "
          }
        </h1>
      </div>
      <div className={styles.subHeading}>
        <h2 className={styles.subText}>
          {`I help companies design and develop progressive web applications with
          delightful user experience. I'm focussing on working on designs and
          implementation of full-stack web solutions using React, Redux, Nextjs,
          GraphQl and MongoDB.`}
        </h2>
      </div>
      <div className={styles.btn_wrapper}>
        <button
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          className={styles.btn}
          onClick={handleClick}
        >
          <span className={styles.spanElement}></span>
          {" Contact me"} {hover ? <UilAngleRight /> : <UilArrowRight />}
        </button>
      </div>
      {/** Social icons */}
      <div className={styles.social_container}>
        <div className={styles.social_title}>{"Social"}</div>
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
            <a
              href="https://wa.me/2540705992717"
              target="_blank"
              rel="noopener noreferrer"
              passHref={true}
            >
              <UilWhatsapp size="25px" color="#fff" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.timeDisplay}>
        <div className={styles.circle}>
          <div className={styles.dateDiv}>
            <span className={styles.date}>{dateSplit[2]}</span>
          </div>
          <div className={styles.monthDiv}>
            <span className={styles.month}>{dateSplit[1]} </span>
            {" Available for work"}
          </div>
        </div>
      </div>
      <div className={styles.hero_bg}></div>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   const HOME_CLICKED = state.filter((item) => item === true);
//   console.log("Home clicked", HOME_CLICKED);
//   return { state: HOME_CLICKED };
// };
// const mapDispatchToProps = {
//   home_click: action_types.home_click,
// };
export default HeroSection;
// export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
