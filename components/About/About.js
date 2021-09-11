import React from "react";
import SVGImage from "../../public/Svg-6.svg";
import SVGImage2 from "../../public/Svg-7.svg";
import Background from "../../public/HeroBG.jpg";
import Image from "next/dist/client/image";
import Contents from "./Contents";
import styles from "./About.module.css";
import {
  AboutWrapper,
  AboutTitleWrapper,
  Titleh1,
  TitleSpan,
} from "./AboutElements";

function About() {
  return (
    <AboutWrapper>
      <div className={styles.AboutHero}>
        <Image
          src={Background}
          alt="Background image"
          objectFit={"none"}
          className={styles.backgroundImage}
        />
        <div className={styles.bglinear}></div>
        <div className={styles.titleContainer}>
          <Titleh1>{"About me"}</Titleh1>
          <TitleSpan>{"My Personal Journey"}</TitleSpan>
        </div>
      </div>
      <AboutTitleWrapper>
        {/* <Titleh1>Qualification</Titleh1>
        <TitleSpan>My personal journey</TitleSpan> */}
      </AboutTitleWrapper>
      <Contents
        title="Education"
        titlespan="Bsc. Computer Science- Kibabii University(2015-2019)"
        reverse={false}
        illustrator={SVGImage}
        description="My journey to become a professional software developer kicked off at Kibabii University. The institution offers best in class software skills and training facilities to help students become leading experts in their respective fields. With a strong background in software development fundamentals, web development technologies have gradually become a passion and a path to a self-fulfilling career."
      />
      <Contents
        title="Work"
        titlespan="ME Moringa for Life (2019-2020) & Freelancing (2020-2021)"
        reverse={true}
        illustrator={SVGImage2}
        description="
         Working at ME Moringa for Life brought the best out of me, where I worked as a full-stack developer and ICT infrastructure manager around the company. Besides, I was maintaining a career as a freelance web developer for multiple clients, online and locally. Working as a freelancer has contributed immensely to my knowledge and skills since I get to work on different projects with different clients. I'm a self motivated developer who likes to push the envelope to deliver the best quality work.    
        "
      />
    </AboutWrapper>
  );
}

export default About;
