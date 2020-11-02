import React, { Component } from "react";
import "../RecommendComponent/Recommend.scss";
import styled from "styled-components";

class RecommendVehicles extends Component {
  render() {
    const { className, text } = this.props;
    return (
      <VehiclesWrap>
        <div>
          <i className={className}></i>
        </div>
        <span>{text}</span>
      </VehiclesWrap>
    );
  }
}
export default RecommendVehicles;

const VehiclesWrap = styled.button`
  width: 248px;
  height: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 74px;
    height: 74px;
    margin-bottom: 30px;
    background-color: rgb(37, 138, 247);
    border-radius: 50%;
    font-size: 29px;
    color: white;
  }
  span {
    font-size: 16px;
    color: rgb(37, 138, 247);
    font-weight: 500;
  }
`;
