import React, { useState, useRef, useEffect } from "react";
import { signIn, getSession, useSession } from "next-auth/client";
import {
  UilAngleRight,
  UilArrowRight,
  UilGoogle,
} from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import styles from "./Signin.module.css";
import {
  InputEmail,
  InputPassword,
  SignInWrapper,
  FormWrapper,
  Field,
  Label,
  SignInHeading,
  Heading,
  Span,
  BtnWrapper,
  ToLogin,
} from "./SigninELements";
import Loading from "../Loader/Loader";

function SignUp() {
  const [focussed, setFoccussed] = useState(false);
  const [focussed2, setFoccussed2] = useState(false);

  const [shover, setSHover] = useState(false);

  const [session, loading] = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [nullEmail, setNullEmail] = useState(false);
  const [nullPassword, setNullPassword] = useState(false);

  const focussref = useRef(null);
  const focussref2 = useRef(null);

  const router = useRouter();

  const onSHover = () => {
    setSHover(!shover);
  };

  const handleSignupClick = async () => {
    if (email !== "" && password !== "") {
      const status = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
      if (status.error === null) {
        setSuccess(true);
        router.replace("/blog");
        return <div className={styles.success}>Logged in as successully </div>;
      } else {
        setError(true);
      }
    } else {
      if (email === "") {
        setNullEmail(true);
      }
      if (password === "") {
        setNullPassword(true);
      }
    }
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
  return (
    <SignInWrapper>
      <FormWrapper>
        {loading ? (
          <Loading width={50} height={50} />
        ) : error ? (
          <div className={styles.alertdiv}>
            Could not login, invalid email or password!
          </div>
        ) : (
          ""
        )}

        <SignInHeading>
          <Heading>
            <Span>Welcome back</Span> feel free to read all the blogs.
          </Heading>
        </SignInHeading>
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
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
              setNullEmail(false);
            }}
          />
        </Field>
        <Field>
          <Label>
            {" "}
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
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
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
            Log in {shover ? <UilAngleRight /> : <UilArrowRight />}
          </button>
        </BtnWrapper>

        <BtnWrapper>
          {" "}
          <button
            onMouseEnter={onSHover}
            onMouseLeave={onSHover}
            className={styles.btn}
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/blog" })
            }
          >
            <span className={styles.spanElement}></span>
            <UilGoogle size="25px" /> Login with google
            {shover ? <UilAngleRight /> : <UilArrowRight />}
          </button>
        </BtnWrapper>
      </FormWrapper>
    </SignInWrapper>
  );
}

export default SignUp;
