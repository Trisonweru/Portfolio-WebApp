import React from "react";
import { services } from "../../data/data";
import Image from "next/image";
import { UilCheck } from "@iconscout/react-unicons";
import {
  ServicesWrapper,
  ServiceHeadingWrapper,
  ServiceHeading,
  SubHeading,
  CardWrapper,
  Info,
  CardImgWrapper,
  CardContentWrapper,
  CardHeadingWrapper,
  CardHeading,
  CardList,
  CardUL,
  List,
  ServiceIcon,
  ServiceItem,
  ServiceContainer,
} from "./ServicesElement";
function Services() {
  return (
    <ServicesWrapper>
      <ServiceContainer>
        <ServiceHeadingWrapper>
          <ServiceHeading>Services</ServiceHeading>
          <SubHeading>What I can do for you</SubHeading>
        </ServiceHeadingWrapper>
        <CardWrapper>
          {services.map((item, index) => (
            <Info key={index}>
              <CardImgWrapper>
                <Image src={item.image} alt={item.title} />
              </CardImgWrapper>
              <CardContentWrapper>
                <CardHeadingWrapper>
                  <CardHeading>{item.title}</CardHeading>
                </CardHeadingWrapper>
                <CardList>
                  <CardUL>
                    {item.description.map((item2, index) => (
                      <List key={index}>
                        <ServiceIcon>
                          <UilCheck size="23px" color="#000" />
                        </ServiceIcon>
                        <ServiceItem>{item2.item}</ServiceItem>
                      </List>
                    ))}
                  </CardUL>
                </CardList>
              </CardContentWrapper>
            </Info>
          ))}
          ;
        </CardWrapper>
      </ServiceContainer>
    </ServicesWrapper>
  );
}

export default Services;
