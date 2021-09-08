import React, { useState, useRef, useEffect } from "react";
import { UilAngleRight, UilArrowRight } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import styles from "./Signup.module.css";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Apollo_Client/Query";
import Loading from "../Loader/Loader";
import {
  InputEmail,
  InputPassword,
  SignupWrapper,
  FormWrapper,
  Field,
  Label,
  SignUpHeading,
  Heading,
  Span,
  BtnWrapper,
  ToLogin,
} from "./SignUpELements";

function SignUp() {
  const [focussed, setFoccussed] = useState(false);
  const [focussed2, setFoccussed2] = useState(false);

  const [shover, setSHover] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nullEmail, setNullEmail] = useState(false);
  const [nullPassword, setNullPassword] = useState(false);

  const focussref = useRef(null);
  const focussref2 = useRef(null);

  const router = useRouter();

  const onSHover = () => {
    setSHover(!shover);
  };

  const handleLoginClick = () => {
    router.push("/auth/sign_in");
  };

  const onClickHandler = () => {
    focussref.current.focus();
    setFoccussed(true);
    setFoccussed2(false);
  };
  const onClickHandler2 = () => {
    focussref2.current.focus();
    setFoccussed(false);
    setFoccussed2(true);
  };
  useEffect(() => {
    focussref.current.focus();
    setFoccussed(true);
  }, []);

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    errorPolicy: "all",
  });
  const handleSignupClick = () => {
    if (email !== "" && password !== "") {
      createUser({ variables: { email: email, password: password } });
      setEmail("");
      setPassword("");
    } else {
      if (email === "") {
        setNullEmail(true);
      }
      if (password === "") {
        setNullPassword(true);
      }
    }
  };
  const handler = () => {
    router.replace("/auth/sign_in");
    return <div className={styles.success}>User created successully</div>;
  };
  return (
    <SignupWrapper>
      <FormWrapper>
        {loading ? (
          <Loading width={50} height={50} />
        ) : error ? (
          error.graphQLErrors.map(({ message }, i) => (
            <div className={styles.alertdiv} key={i}>
              {message}
            </div>
          ))
        ) : data ? (
          handler()
        ) : (
          ""
        )}

        <SignUpHeading>
          <Heading>
            <Span>Sign up</Span> to get notified on new excitting blogs.
          </Heading>
        </SignUpHeading>
        <Field>
          <Label>
            {" "}
            {nullEmail ? (
              <p className={styles.alert}>Email is required. </p>
            ) : (
              "Email*"
            )}
          </Label>
          <InputEmail
            type="email"
            placeholder="Email"
            ref={focussref}
            onFocus={onClickHandler}
            focussed={focussed}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setNullEmail(false);
            }}
          />
        </Field>
        <Field>
          <Label>
            {nullPassword ? (
              <p className={styles.alert}>Password is required. </p>
            ) : (
              "Password*"
            )}
          </Label>
          <InputPassword
            type="password"
            placeholder="Password"
            ref={focussref2}
            onFocus={onClickHandler2}
            focussed={focussed2}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setNullPassword(false);
            }}
          />
        </Field>
        <BtnWrapper>
          {" "}
          <button
            onMouseEnter={onSHover}
            onMouseLeave={onSHover}
            className={styles.btn}
            onClick={handleSignupClick}
          >
            <span className={styles.spanElement}></span>
            Submit {shover ? <UilAngleRight /> : <UilArrowRight />}
          </button>
        </BtnWrapper>
        <ToLogin>
          <p className={styles.logintext}>
            Already have an account?{" "}
            <span className={styles.loginspan} onClick={handleLoginClick}>
              {" "}
              Login here
            </span>
          </p>
        </ToLogin>
      </FormWrapper>
    </SignupWrapper>
  );
}

export default SignUp;
