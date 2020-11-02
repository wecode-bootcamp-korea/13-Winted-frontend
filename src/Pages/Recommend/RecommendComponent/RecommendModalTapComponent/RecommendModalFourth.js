import React, { Component } from "react";
import styled from "styled-components";

export class RecommendModalFourth extends Component {
  render() {
    return (
      <ModalFourth>
        <div>
          <i class="fas fa-search" />
          <input type="text" placeholder="친구 검색" />
        </div>
        <div></div>
        <div>
          <button>선택 완료</button>
        </div>
      </ModalFourth>
    );
  }
}

export default RecommendModalFourth;

const ModalFourth = styled.section`
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 20px; */
  div:nth-child(1) {
    padding-left: 15px;
    height: 51px;
    width: 100%;
    border-bottom: 1px solid rgb(203, 203, 203);
    .fa-search {
      padding-right: 10px;
      font-size: 18px;
      color: rgb(203, 203, 203);
    }
    input {
      height: 50px;
      width: 454px;
      border: none;
      outline: unset;
    }
  }
  div:nth-child(2) {
    width: 500px;
    height: 370px;
  }
  div:nth-child(3) {
    margin-top: 20px;
    bottom: 0px;
    button {
      height: 50px;
      width: 500px;
      color: white;
      font-size: 17px;
      text-align: center;
      background-color: rgb(124, 124, 125);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
