import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;
export const AboutTitleWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
export const Titleh1 = styled.h1`
  color: #fff;
  max-width: 60%;
  font-size: 3.5em;
  font-weight: 700;
  text-shadow: 0 0 3px #ff0000, 0 0 5px #3cff00;
`;
export const TitleSpan = styled.span`
  font-size: 15px;
  margin-top: -10px;
  font-weight: 600;
  color: #fff;
`;
export const ContentWrapper = styled.div`
  display: flex;
  //   flex-flow: row wrap-reverse;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: center;
  align-items: start;
  width: 80%;
  @media screen and (max-width: 968px) {
    flex-direction: column-reverse;
  }
`;
export const Wrapper = styled.div`
  flex: 0.5;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
export const ContentTitle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  justify-content: start;
  width: 100%;
`;
export const Titleh2 = styled.h2`
  font-size: 25px;
  color: #01bf71;
`;
export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  @media screen and (max-width: 968px) {
    margin-top: 0px;
  }
`;
export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
export const IllustrationImageWrapper = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: start;
`;
export const Blob1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;
export const ContentDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: -150px;
  z-index: 3;
  @media screen and (max-width: 1024px) {
    margin-top: -100px;
  }
  @media screen and (max-width: 968px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 468px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 328px) {
    margin-top: 0px;
  }
`;
