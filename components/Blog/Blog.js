import React, { useState, useRef } from "react";
import Loading from "../Loader/Loader";
import { signOut, useSession } from "next-auth/client";
import { blogs } from "../../data/data";
import styles from "./Blog.module.css";
import { useRouter } from "next/router";
import {
  UilAngleRight,
  UilArrowRight,
  UilInfo,
  UilUserCircle,
  UilAngleDown,
  UilAngleUp,
} from "@iconscout/react-unicons";
import {
  BlogWrapper,
  None,
  BlogContainer,
  BlogSection,
  BlogSlider,
  BlogPosts,
  BlogControllerSection,
  AuthArea,
  ContentFiltersArea,
  BtnWrapper,
  UserProfile,
  User,
  UserInWrapper,
  Icon,
} from "./BlogElements";

function Blog() {
  const [shover, setSHover] = useState(false);
  const [lhover, setLHover] = useState(false);
  const [ohover, setOHover] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const signupRef = useRef(null);
  const loginRef = useRef(null);
  const outRef = useRef();

  const [session, loading] = useSession();

  const router = useRouter();

  const onSHover = () => {
    setSHover(!shover);
  };
  const onLHover = () => {
    setLHover(!lhover);
  };
  const onOHover = () => {
    setOHover(!ohover);
  };
  const handleLoginClick = () => {
    router.push("/auth/sign_in");
  };
  const handleSignupClick = () => {
    router.push("/auth/sign_up");
  };
  return (
    <BlogWrapper>
      {blogs ? (
        <BlogContainer>
          <BlogSection>
            <BlogSlider></BlogSlider>
            <BlogPosts></BlogPosts>
          </BlogSection>
          <BlogControllerSection>
            <AuthArea onClick={() => setUserClicked(!userClicked)}>
              {loading ? (
                <div className={styles.loader}>
                  <Loading width={60} height={60} />
                </div>
              ) : session ? (
                <UserProfile>
                  <User userClicked={userClicked}>
                    <UserInWrapper>
                      <UilUserCircle
                        size="30px"
                        color="#01bf71"
                        className={styles.icon}
                      />{" "}
                      {session.user.email}
                    </UserInWrapper>
                    <Icon>
                      {userClicked ? (
                        <UilAngleUp size="30px" color="#01bf71" />
                      ) : (
                        <UilAngleDown size="30px" color="#01bf71" />
                      )}
                    </Icon>
                  </User>
                  {userClicked && (
                    <BtnWrapper>
                      <button
                        onMouseEnter={onOHover}
                        onMouseLeave={onOHover}
                        className={styles.btn}
                        onClick={() => signOut()}
                        ref={outRef}
                      >
                        <span className={styles.spanElement}></span>
                        Sign out
                        {ohover ? <UilAngleRight /> : <UilArrowRight />}
                      </button>
                    </BtnWrapper>
                  )}
                </UserProfile>
              ) : !session ? (
                <>
                  <BtnWrapper>
                    {" "}
                    <button
                      onMouseEnter={onSHover}
                      onMouseLeave={onSHover}
                      className={styles.btn}
                      onClick={handleSignupClick}
                      ref={signupRef}
                    >
                      <span className={styles.spanElement}></span>
                      Sign up {shover ? <UilAngleRight /> : <UilArrowRight />}
                    </button>
                  </BtnWrapper>
                  <BtnWrapper>
                    {" "}
                    <button
                      onMouseEnter={onLHover}
                      onMouseLeave={onLHover}
                      className={styles.btn}
                      onClick={handleLoginClick}
                      ref={loginRef}
                    >
                      <span className={styles.spanElement}></span>
                      Sign in {lhover ? <UilAngleRight /> : <UilArrowRight />}
                    </button>
                  </BtnWrapper>
                </>
              ) : (
                ""
              )}
            </AuthArea>
            <ContentFiltersArea></ContentFiltersArea>
          </BlogControllerSection>
        </BlogContainer>
      ) : (
        <None>
          <UilInfo size="40px" color="#01bf71" />
          No blogs uploaded yet
        </None>
      )}
    </BlogWrapper>
  );
}

export default Blog;
