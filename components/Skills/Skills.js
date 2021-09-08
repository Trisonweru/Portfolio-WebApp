import React, { useState } from "react";
import styles from "./Skills.module.css";
import SVG2 from "../../public/Svg-2.svg";
import Image from "next/image";
import { connect } from "react-redux";
import {
  frontend_skills,
  backend_skills,
  payment_gateways,
} from "../../data/data";

import {
  UilBracketsCurly,
  UilAngleDown,
  UilAngleUp,
  UilDatabaseAlt,
  UilBill,
} from "@iconscout/react-unicons";
import { Progress } from "react-sweet-progress";

import {
  MobileSkillsWrapper,
  Frontend,
  HeaderSkill,
  TittleWrapper,
  Title,
  TittleIconWrapper,
  TittleTextWrapper,
  TittleSpan,
  IconWrapper,
  BodyContent,
  ProgressWrapper,
  ContentTitle,
  Backend,
  Payment,
  ImageWrapper,
} from "./Elements";

function Skills() {
  const [skillClicked, setSkillClicked] = useState(false);
  const [backendClicked, setBackendClicked] = useState(true);
  const [paymentClicked, setPaymentClicked] = useState(false);

  const toggleSkills = () => {
    setSkillClicked(!skillClicked);
    setBackendClicked(false);
    setPaymentClicked(false);
  };
  const toggleBackend = () => {
    setSkillClicked(false);
    setPaymentClicked(false);
    setBackendClicked(!backendClicked);
  };
  const togglePayment = () => {
    setSkillClicked(false);
    setBackendClicked(false);
    setPaymentClicked(!paymentClicked);
  };
  return (
    <div className={styles.skills_container}>
      <div className={styles.content_wrapper}>
        <div className={styles.heading_wrapper}>
          <h2 className={styles.skills_heading}>Skills</h2>
          <p className={styles.sub_text}>My technical level</p>
        </div>
        {/* Mobile Skills */}
        <MobileSkillsWrapper>
          <Frontend onClick={toggleSkills} skillClicked={skillClicked}>
            <HeaderSkill>
              <TittleWrapper>
                <Title>
                  <TittleIconWrapper>
                    <UilBracketsCurly size="30px" color="#01bf71" />
                  </TittleIconWrapper>
                  <TittleTextWrapper>Frontend Skills</TittleTextWrapper>
                </Title>
                <TittleSpan>3+ years of experience</TittleSpan>
              </TittleWrapper>
              <IconWrapper onClick={toggleSkills}>
                {skillClicked ? <UilAngleUp /> : <UilAngleDown />}
              </IconWrapper>
            </HeaderSkill>
            {skillClicked ? (
              <BodyContent>
                {frontend_skills.map((item, index) => (
                  <ProgressWrapper
                    key={index}
                    theme={{
                      success: {
                        color: "#01bf71",
                      },
                      active: {
                        color: "#01bf71",
                      },
                      default: {
                        color: "#01bf71",
                      },
                    }}
                  >
                    <ContentTitle>{item.skill}</ContentTitle>
                    <Progress percent={item.level} />
                  </ProgressWrapper>
                ))}
              </BodyContent>
            ) : (
              ""
            )}
          </Frontend>
          {/*Backend*/}
          <Backend onClick={toggleBackend} backendClicked={backendClicked}>
            <HeaderSkill>
              <TittleWrapper>
                <Title>
                  <TittleIconWrapper>
                    <UilDatabaseAlt size="30px" color="#01bf71" />
                  </TittleIconWrapper>
                  <TittleTextWrapper>Backend Skills</TittleTextWrapper>
                </Title>
                <TittleSpan>3+ years of experience</TittleSpan>
              </TittleWrapper>
              <IconWrapper onClick={toggleBackend}>
                {backendClicked ? <UilAngleUp /> : <UilAngleDown />}
              </IconWrapper>
            </HeaderSkill>
            {backendClicked ? (
              <BodyContent>
                {backend_skills.map((item, index) => (
                  <ProgressWrapper key={index}>
                    <ContentTitle>{item.skill}</ContentTitle>
                    <Progress percent={item.level} />
                  </ProgressWrapper>
                ))}
              </BodyContent>
            ) : (
              ""
            )}
          </Backend>
          {/**Payment Gateways */}
          <Payment onClick={togglePayment} paymentClicked={paymentClicked}>
            <HeaderSkill>
              <TittleWrapper>
                <Title>
                  <TittleIconWrapper>
                    <UilBill size="30px" color="#01bf71" />
                  </TittleIconWrapper>
                  <TittleTextWrapper>Payment Gateways</TittleTextWrapper>
                </Title>
                <TittleSpan>3+ years of experience</TittleSpan>
              </TittleWrapper>
              <IconWrapper onClick={togglePayment}>
                {paymentClicked ? <UilAngleUp /> : <UilAngleDown />}
              </IconWrapper>
            </HeaderSkill>
            {paymentClicked ? (
              <BodyContent>
                {payment_gateways.map((item, index) => (
                  <ProgressWrapper key={index}>
                    <ContentTitle>{item.skill}</ContentTitle>
                    <Progress percent={item.level} />
                  </ProgressWrapper>
                ))}
              </BodyContent>
            ) : (
              ""
            )}
          </Payment>
        </MobileSkillsWrapper>
      </div>
    </div>
  );
}

export default Skills;
