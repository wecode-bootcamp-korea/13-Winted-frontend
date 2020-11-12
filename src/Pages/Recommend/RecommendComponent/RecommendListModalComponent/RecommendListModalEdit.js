import React, { Component } from "react";
import { API_Detail } from "../../../../config";
import styled from "styled-components";

export class RecommendListModalEdit extends Component {
  render() {
    const { contents } = this.props;

    return (
      <ListUserContentEdit>
        <textarea
          value={this.props.contents}
          onChange={this.props.handleInput}
          className="listUserEdit"
        ></textarea>
      </ListUserContentEdit>
    );
  }
}

export default RecommendListModalEdit;

const ListUserContentEdit = styled.div`
  padding: 20px;
  .listUserEdit {
    resize: none;
    width: 500px;
    height: 600px;
    padding: 0 20px 20px 20px;
    line-height: 20px;
    border: none;
    outline: unset;
    font-family: inherit;
    font-size: inherit;
  }
`;
