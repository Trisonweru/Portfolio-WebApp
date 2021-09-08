import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import image from "../../public/HeroBG.jpg";
import { UilAngleRight, UilArrowRight } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import Card from "./ListScroll";
// import { connect } from "react-redux";
// import * as action_types from "../../redux/dispatch";

import { HeroContainer } from "./HeroSectionELements";

function HeroSection(props) {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const onHover = () => {
    setHover(!hover);
  };

  const handleClick = () => {
    router.push("/contact");
    // props.dispatch({ type: "HOME_CLICKED", payload: hover });
    // props.home_click(hover);
  };

  return (
    <div className={styles.hero_container}>
      {/* <div className={styles.hero_bg}>
        <Image
          src={image}
          alt="Backgound image"
          placeholder="blur"
          className={styles.hero_img}
          layout="fill"
        />
      </div> */}
      <div className={styles.hero_content}>
        <h1 className={styles.h1}>{"Hi, I'am Isaac"}</h1>
        <h3 className={styles.h3}>{"Full stack web developer"}</h3>
        <p className={styles.p}>
          {
            "High level experience in full stack web design and development knowledge, producing quality work."
          }
        </p>
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
      </div>
      <div className={styles.left_skills}>
        <h2 className={styles.h2}>{"Skills"}</h2>
        <div className={styles.skill1}>{"React JS"}</div>
        <div className={styles.skill2}>{"Next JS"}</div>
        <div className={styles.skill3}>{"Redux"}</div>
        <div className={styles.skill4}>{"GraphQL"}</div>
      </div>
      <Card />
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
