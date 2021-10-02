import React, { useRef, useEffect, useState } from "react";
import {
  UilAngleRight,
  UilArrowRight,
  UilPhone,
} from "@iconscout/react-unicons";
import styles from "./Contact.module.css";
import Link from "next/link";
import { CREATE_CONTACT } from "../Apollo_Client/Query";
import Background from "../../public/HeroBG.jpg";
import Image from "next/dist/client/image";
import {
  ContactWrapper,
  ContactItemsWrapper,
  ContactSection,
  HeadingWrapper,
  Heading,
  FormWrapper,
  Field,
  Label,
  InputName,
  InputEmail,
  InputProject,
  TextAreaMessage,
  HeadingSpan,
  BtnWrapper,
  ContactSectionMap,
  CallBtnWrapper,
  ResponseMessage,
  Titleh1,
  TitleSpan,
} from "./ContactElements";

import dynamic from "next/dynamic";
import { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMutation } from "@apollo/client";

const Map = dynamic(() => import("./Map.js"), {
  ssr: false,
});

function Contact() {
  const [hover, setHover] = useState(false);
  const [focussed, setFoccussed] = useState(false);
  const [focussed2, setFoccussed2] = useState(false);
  const [focussed3, setFoccussed3] = useState(false);
  const [focussed4, setFoccussed4] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(12);
  const [mapwidth, setMapWidth] = useState("100%");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [submitContact, { data, loading, error }] = useMutation(
    CREATE_CONTACT,
    {
      errorPolicy: "all",
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    const dataObj = {
      email: email,
      name: name,
      project: project,
      message: message,
    };
    if (
      email !== null &&
      name !== null &&
      project !== null &&
      message !== null
    ) {
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(dataObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { error } = await res.json();
      if (error === "") {
        setSubmitted(true);
        resetter();
        submitContact({
          variables: {
            email: email,
            name: name,
            project: project,
            message: message,
          },
        });
      }
    }
  };

  const resetter = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
    setName("");
    setProject("");
    setEmail("");
    setMessage("");
  };

  const onHover = () => {
    setHover(!hover);
  };
  const focussref = useRef(null);
  const focussref2 = useRef(null);
  const focussref3 = useRef(null);
  const focussref4 = useRef(null);

  const onClickHandler = () => {
    focussref.current.focus();
    setFoccussed(true);
    setFoccussed2(false);
    setFoccussed3(false);
    setFoccussed4(false);
  };
  const onClickHandler2 = () => {
    focussref2.current.focus();
    setFoccussed(false);
    setFoccussed2(true);
    setFoccussed3(false);
    setFoccussed4(false);
  };
  const onClickHandler3 = () => {
    focussref3.current.focus();
    setFoccussed(false);
    setFoccussed2(false);
    setFoccussed3(true);
    setFoccussed4(false);
  };
  const onClickHandler4 = () => {
    focussref4.current.focus();
    setFoccussed(false);
    setFoccussed2(false);
    setFoccussed3(false);
    setFoccussed4(true);
  };

  useEffect(() => {
    focussref2.current.focus();
    setFoccussed2(true);
  }, []);

  return (
    <ContactWrapper>
      <div className={styles.contactHero}>
        <Image
          src={Background}
          alt="Background image"
          objectFit="none"
          className={styles.backgroundImage}
        />
        <div className={styles.bglinear}></div>
        <div className={styles.titleContainer}>
          <Titleh1>{"Interested ?"}</Titleh1>
          <TitleSpan>{"Lets Get In Touch!"}</TitleSpan>
        </div>
      </div>
      <ContactItemsWrapper>
        <ContactSection>
          <HeadingWrapper>
            <Heading>{"Let's Talk"}</Heading>
            {/* <HeadingSpan>{"Get in touch"}</HeadingSpan> */}
          </HeadingWrapper>
          {submitted ? (
            <ResponseMessage>
              <p>{"Thank you for your interest. Your message was sent."}</p>
            </ResponseMessage>
          ) : (
            ""
          )}
          <FormWrapper>
            <Field>
              <Label>{"Email"}</Label>
              <InputEmail
                type="email"
                placeholder="Email"
                ref={focussref2}
                onFocus={onClickHandler2}
                focussed={focussed2}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field>
              <Label>{"Name"}</Label>
              <InputName
                type="text"
                placeholder="Name"
                ref={focussref}
                focussed={focussed}
                onFocus={onClickHandler}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>

            <Field>
              <Label>{"Project"}</Label>
              <InputProject
                type="text"
                placeholder="Project"
                ref={focussref3}
                onFocus={onClickHandler3}
                focussed={focussed3}
                onChange={(e) => setProject(e.target.value)}
              />
            </Field>
            <Field>
              <Label>{"Message"}</Label>
              <TextAreaMessage
                type="text"
                placeholder="Message"
                rows="5"
                ref={focussref4}
                onFocus={onClickHandler4}
                focussed={focussed4}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>
            <BtnWrapper>
              {" "}
              <button
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                className={styles.btn}
                onClick={handleClick}
              >
                <span className={styles.spanElement}></span>
                {" Send"} {hover ? <UilAngleRight /> : <UilArrowRight />}
              </button>
            </BtnWrapper>
          </FormWrapper>
        </ContactSection>
        <ContactSectionMap>
          <CallBtnWrapper>
            <Link href="tel:+254-011-488-4275" passHref={true}>
              <div className={styles.CallBtn}>
                <UilPhone />
                {"+254-114-884-275"}
              </div>
            </Link>
          </CallBtnWrapper>
          <Map
            center={[36.802715, -1.296791]}
            style="mapbox://styles/mapbox/streets-v11"
            containerStyle={{
              height: "42em",
              width: "35em",
            }}
            onStyleLoad={() => setZoomLevel(12.001)}
            zoom={[zoomLevel]}
            className={styles.Map}
          >
            <Layer
              type="circle"
              id="marker"
              paint={{
                "circle-radius": 20,
                "circle-color": "#ff5200",
                "circle-stroke-width": 1,
                "circle-stroke-color": "#fff",
                "circle-stroke-opacity": 1,
              }}
            >
              <Feature coordinates={[36.802715, -1.296791]} />
            </Layer>
          </Map>
          <a
            href="https://wa.me/2540705992717"
            className={styles.whatsapp_float}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </ContactSectionMap>
      </ContactItemsWrapper>
    </ContactWrapper>
  );
}

export default Contact;
