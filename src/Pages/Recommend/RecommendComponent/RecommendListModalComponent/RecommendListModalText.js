import React, { Component } from "react";
import { API_Detail } from "../../../../config";
import styled from "styled-components";

export class RecommendListModalText extends Component {
  render() {
    const { contents } = this.props;
    return (
      <ListUserContentText>
        <span className="listUserText">{contents}</span>
      </ListUserContentText>
    );
  }
}

export default RecommendListModalText;

const ListUserContentText = styled.div`
  .listUserText {
    width: 500px;
    height: 237px;
    padding: 20px;
    line-height: 20px;
  }
`;
