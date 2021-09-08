import React from "react";
import { UilInfo } from "@iconscout/react-unicons";
import { PortfolioWrapper, None } from "./PortfolioElement";

function Portfolio() {
  return (
    <PortfolioWrapper>
      <None>
        <UilInfo size="40px" color="#01bf71" />
        No projects uploaded yet
      </None>
    </PortfolioWrapper>
  );
}

export default Portfolio;
