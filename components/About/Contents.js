import React from "react";
import Image from "next/image";
import Blob from "../../public/blob1.svg";
import {
  TitleSpan,
  ContentWrapper,
  Wrapper,
  ContentTitle,
  Titleh2,
  ContentDescription,
  Description,
  IllustrationImageWrapper,
  Blob1,
  ContentDesc,
} from "./AboutElements";

function Contents({ title, titlespan, illustrator, reverse, description }) {
  return (
    <ContentWrapper reverse={reverse}>
      <Wrapper>
        <ContentTitle>
          <Titleh2> {title}</Titleh2>
          <TitleSpan>{titlespan}</TitleSpan>
        </ContentTitle>
        <ContentDescription>
          <Blob1>
            <Image
              src={Blob}
              alt="Blob"
              width="600px"
              height="150px"
              objectFit="cover"
            />
          </Blob1>
          <ContentDesc>
            <Description>{description}</Description>
          </ContentDesc>
        </ContentDescription>
      </Wrapper>
      <IllustrationImageWrapper>
        <Image
          src={illustrator}
          alt="Education background"
          width="300px"
          height="350px"
        />
      </IllustrationImageWrapper>
    </ContentWrapper>
  );
}

export default Contents;
