import React, { useState } from "react";
import styles from "./wave.module.css";
import Image from "next/image";
import SVG1 from "../../public/Svg-1.svg";
import { useRouter } from "next/router";
import { UilAngleRight, UilArrowRight } from "@iconscout/react-unicons";

function Wave() {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className={styles.wave_container}>
      <div className={styles.about_wrapper}>
        <div className={styles.content_wrapper}>
          <div className={styles.header_wrapper}>
            <h2 className={styles.abt_text}>
              <span className={styles.about_text}>About</span> Me
            </h2>
            <p className={styles.intro}>My Introduction</p>
          </div>
          <div className={styles.content_svg_wrapper}>
            <div className={styles.txt}>
              <p className={styles.about_txt}>
                Web developer with extensive knowledge and years of experience,
                working in web technologies and UI/UX design delivering quality
                work.
              </p>
              <button
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                className={styles.btn}
                onClick={() => router.push("/about")}
              >
                <span className={styles.spanElement}></span>
                Learn more
                {hover ? <UilAngleRight /> : <UilArrowRight />}
              </button>
            </div>
            <div className={styles.svg_wrapper}>
              <Image src={SVG1} alt="About me" width="500px" height="300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wave;
