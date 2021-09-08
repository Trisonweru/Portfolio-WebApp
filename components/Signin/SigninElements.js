import styled from "styled-components";

export const SignInWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #01bf71;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  background: #000;
  border-radius: 10px;
  padding: 10px;
  height: 450px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(0, 0, 0, 0.7);
`;
export const InputEmail = styled.input`
  padding: 14px 15px;
  outline: none;
  margin-top: 3px;
  background: #dbe0de;
  border: ${({ focussed }) => (focussed ? "2px solid #01bf71" : "none")};
  font-size: 14px;
`;
export const InputPassword = styled.input`
  padding: 14px 15px;
  outline: none;
  margin-top: 3px;
  background: #dbe0de;
  border: ${({ focussed }) => (focussed ? "2px solid #01bf71" : "none")};
  font-size: 14px;
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 400;
  color: #fff;
`;

export const SignInHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const Heading = styled.h1`
  font-size: 20px;
  max-length: 90%;
  font-weight: 400;
  color: #fff;
`;
export const Span = styled.span`
  font-size: 22px;
  color: #01bf71;
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;
export const ToLogin = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
