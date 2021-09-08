import styled from "styled-components";

export const CallToActionContent = styled.div`
  display: flex;
  flex-flow: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: #01bf71;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.5),
    -6px -6px 10px -1px rgba(255, 255, 255, 0);

  @media screen and (max-width: 500px) {
    height: 350px;
    width: 86%;
  }
`;

export const CallToActionHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const CallToActionHeading = styled.h2`
  color: #000;
  font-size: 1.8em;
  max-width: 80%;
  text-align: center;
`;
export const CallToActionContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
`;
export const CallToActionDetails = styled.p`
  font-size: 20px;
  max-width: 80%;
  text-align: center;
`;
export const CallToActionButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
