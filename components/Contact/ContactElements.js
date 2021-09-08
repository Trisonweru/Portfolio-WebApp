import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const ContactItemsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: start;
  @media screen and (max-width: 968px) {
    flex-direction: column;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin: 10px;
`;
export const HeadingWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;
`;
export const Heading = styled.h1`
  font-size: 38px;
  color: #01bf71;
`;
export const FormWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const Label = styled.label`
  font-size: 13px;
  font-weight: 400;
`;
export const InputName = styled.input`
  padding: 14px 15px;
  outline: none;
  margin-top: 3px;
  background: #dbe0de;
  border: ${({ focussed }) => (focussed ? "2px solid #000" : "none")};
  font-size: 14px;
`;
export const InputEmail = styled.input`
  padding: 14px 15px;
  outline: none;
  margin-top: 3px;
  background: #dbe0de;
  border: ${({ focussed }) => (focussed ? "2px solid #000" : "none")};
  font-size: 14px;
`;
export const InputProject = styled.input`
  padding: 14px 15px;
  outline: none;
  margin-top: 3px;
  background: #dbe0de;
  border: ${({ focussed }) => (focussed ? "2px solid #000" : "none")};
  font-size: 14px;
`;

export const TextAreaMessage = styled.textarea`
  padding: 14px 15px;
  outline: none;
  margin-top: 3px;
  background: #dbe0de;
  border: ${({ focussed }) => (focussed ? "2px solid #000" : "none")};
  font-size: 14px;
`;
export const HeadingSpan = styled.span`
  margin-top: -10px;
  font-size: 15px;
  font-weight: 600;
`;
export const BtnWrapper = styled.div``;

export const ContactSectionMap = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  width: 100%;
  // padding-top: 20px;
  background: #dbe0de;
  margin: 10px;
`;

export const CallBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  // margin-botton: -100px;
  z-index: 3;
  background: #dbe0de;
  padding: 5px;

  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
`;

export const ResponseMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #033a24;
  color: #4cdaa1;
  margin-top: 10px;
`;
