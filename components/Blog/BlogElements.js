import styled from "styled-components";

export const BlogWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;
export const None = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;

  margin-top: 20px;
`;
export const BlogSection = styled.div`
  flex: 0.75;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 200vh;
`;
export const BlogControllerSection = styled.div`
  flex: 0.25;
  display: flex;
  flex-flow: column;
  align-items: center;

  height: 100vh;
`;
export const BlogSlider = styled.div`
  height: 400px;
  width: 100%;
`;
export const BlogPosts = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export const AuthArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  justify-content: space-between;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
`;
export const ContentFiltersArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
export const BtnWrapper = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: ${({ userClicked }) => (userClicked ? "#a8bdb4" : "#fff")};
  justify-content: space-between;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: ${({ userClicked }) =>
    userClicked ? "0" : "10px"};
  border-bottom-left-radius: ${({ userClicked }) =>
    userClicked ? "0" : "10px"};
  &:hover {
    background: #a8bdb4;
  }
  transition: all 0.2s ease-in-out;
`;
export const UserInWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
