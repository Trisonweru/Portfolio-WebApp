import styled from "styled-components";
import image from "../../public/HeroBG.jpg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px; /*0 39px*/
  height: 580px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url("${image}");
  background-size: cover;
  background-position: center;
`;

export const Video = styled.video``;
