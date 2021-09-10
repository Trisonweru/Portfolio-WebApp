import React from "react";
import Contact from "../../components/Contact/Contact";
import withTransition from "../../components/HOC/withTransition";

function index() {
  return (
    <>
      <Contact />
    </>
  );
}

export default withTransition(index);
