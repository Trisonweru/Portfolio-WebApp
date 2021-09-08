import styled from "styled-components";

export const SkillWrapper = styled.div`
  // position: relative;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 250px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

  @media screen and (max-width: 968px) {
    height: 100px;
    width: 130px;
  }
`;

export const Skill = styled.div``;
export const Titleh4 = styled.h4``;

//Mobile Navigation Styles

export const MobileSkillsWrapper = styled.div`
  width: 80%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  align-items: start;
  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
  // display: flex;
  // flex-flow: row wrap;
  // justify-content: space-evenly;
  // align-items: flex-start;
  // width: 100%;
`;

export const Frontend = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: ${({ skillClicked }) => (skillClicked ? "#a8bdb4" : "#fff")};
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.5),
    -6px -6px 10px -1px rgba(255, 255, 255, 0);
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #a8bdb4;
  }
`;

export const HeaderSkill = styled.div`
  flex: 0.9;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

export const TittleWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const TittleIconWrapper = styled.div`
  flex: 0.1;
`;
export const TittleTextWrapper = styled.div`
  flex: 0.8;
  font-size: 20px;
  font-weight: 800;
`;
export const TittleSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 37px;
  width: 100%;
  font-size: 15px;
`;
export const IconWrapper = styled.div`
  flex: 0.1;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;
export const BodyContent = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  transition: all 0.5s ease-in-out;
`;
export const ProgressWrapper = styled.div``;
export const ContentTitle = styled.h4`
  font-size: 15px;
`;
export const Backend = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.5),
    -6px -6px 10px -1px rgba(255, 255, 255, 0);
  transition: all 0.5s ease-in-out;

  cursor: pointer;
  background: ${({ backendClicked }) => (backendClicked ? "#a8bdb4" : "#fff")};
  &:hover {
    background: #a8bdb4;
  }
`;
export const Payment = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.5),
    -6px -6px 10px -1px rgba(255, 255, 255, 0);
  transition: all 0.5s ease-in-out;

  cursor: pointer;
  background: ${({ paymentClicked }) => (paymentClicked ? "#a8bdb4" : "#fff")};
  &:hover {
    background: #a8bdb4;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;
