import styled from "styled-components";

export const ServicesWrapper = styled.div`
  width: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ServiceHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;
export const ServiceHeading = styled.h2`
  color: #01bf71;
  font-size: 38px;
  text-align: center;
`;
export const SubHeading = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: -10px;
  color: #fff;
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 40px;
  justify-items: center;
  align-items: center;
  width: 80%;
  padding: 15px;
  margin-top: 20px;
  @media screen and (max-width: 968px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 50px;
    justify-items: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 25px;
    justify-items: center;
    align-items: center;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  width: 320px;
  height: 350px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(65, 64, 64, 0.8);
  @media screen and (max-width: 768px) {
    width: 280px;
    height: 350px;
  }
`;
export const CardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  > * {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;
export const CardContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;
export const CardHeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const CardHeading = styled.h2`
  color: #000;
  font-size: 20px;
  text-align: center;
`;
export const CardList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
`;
export const CardUL = styled.ul`
  list-style: none;
`;
export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 3px;
`;
export const ServiceIcon = styled.div`
  flex: 0.1;
`;
export const ServiceItem = styled.div`
  flex: 0.8;
`;
