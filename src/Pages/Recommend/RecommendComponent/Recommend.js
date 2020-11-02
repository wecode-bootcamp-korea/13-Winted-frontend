import React, { Component } from "react";
import RecommendBox from "./RecommendBox";
import RecommendVehicles from "../RecommendComponent/RecommendVehicles";
import RecommendModal from "../RecommendComponent/RecommendModal";
import "../RecommendComponent/Recommend.scss";
import styled from "styled-components";

export class Recommend extends Component {
  constructor() {
    super();
    this.state = {
      addUser: 0,
      open: false
    };
  }

  modalHandler = e => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <Middle>
          <button>
            <div>
              <i className="fab fa-facebook"></i>
              <i className="fas fa-user-circle"></i>
              <i className="fas fa-plus-circle"></i>
            </div>
            <span>간단하게 네트워크 연결하고 지인들의 추천을 받아보세요.</span>
            <i className="fas fa-chevron-right"></i>
          </button>
        </Middle>
        <RecommendBox openState={this.modalHandler}>
          <RecommendVehicles
            className={"far fa-envelope"}
            text={"SMS를 통한 추천"}
          />
        </RecommendBox>
        {open && <RecommendModal visibleState={this.modalHandler} />}
      </>
    );
  }
}

export default Recommend;

const Middle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  height: 60px;
  font-size: 16px;
  cursor: pointer;
  background-color: white;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    div {
      width: 75px;
      font-size: 28px;
      letter-spacing: -7px;
      margin-right: 10px;
    }
    span {
      margin-right: 15px;
      margin-top: 4px;
    }
  }
`;
