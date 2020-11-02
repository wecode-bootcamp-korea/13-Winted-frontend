import React, { Component } from "react";
import "../RecommendComponent/Recommend.scss";
import styled from "styled-components";

class RecommendBox extends React.Component {
  render() {
    const { openState, children } = this.props;
    return <BoxWrap onClick={openState}>{children}</BoxWrap>;
  }
}

export default RecommendBox;

const BoxWrap = styled.section`
  width: 248px;
  height: 248px;
  background-color: white;
  border: 1px solid rgb(194, 194, 194);
`;
