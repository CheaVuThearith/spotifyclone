import React from "react";
import Card from "../_components/Card";
import CardContainer from "../_components/CardContainer";

type Props = {};

const page = async (props: Props) => {
  return (
    <>
      <CardContainer key={1}>
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
      </CardContainer>
    </>
  );
};


export default page;
