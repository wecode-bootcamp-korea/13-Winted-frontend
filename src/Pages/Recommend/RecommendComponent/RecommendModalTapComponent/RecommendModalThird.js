import React, { Component } from "react";
import styled from "styled-components";

export class RecommendModalThird extends Component {
  constructor() {
    super();
    this.state = {
      warningMessage: "",
      number: "01012345678"
    };
  }
  handleNumberInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    // const { number } = this.state;
    const isValid = this.state.number.length > 10;
    return (
      <ModalThird className={isValid ? "numberMessage" : "warningMessage"}>
        <div>
          <select name="contry">
            <option value="sydney">+82 (South Korea)</option>
            <option value="melbourne">+81 (Japan)</option>
            <option value="cromwell">+886 (Taiwan)</option>
          </select>
          <input
            name="number"
            type="text"
            placeholder="지인의 전화번호"
            onChange={this.handleNumberInput}
            className="warningMessage"
          />
        </div>
        <div>
          <span className={isValid ? "numberMessage" : "warningMessage"}>
            올바른 형식의 핸드폰 번호를 입력해주세요.
          </span>
        </div>
        <div>
          <button>전송</button>
        </div>
      </ModalThird>
    );
  }
}

export default RecommendModalThird;

const ModalThird = styled.section`
  height: 160px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.warningMessage {
    height: 170px;
  }
  div:nth-child(1) {
    select {
      width: 98px;
      height: 48px;
      border: 1px solid rgb(203, 203, 203);
      padding: 0 20px 0 20px;
      font-size: 16px;
      border-radius: 4px;
    }
    input {
      height: 48px;
      width: 348px;
      padding: 0 0 0 20px;
      margin-left: 13px;
      border: 1px solid rgb(203, 203, 203);
      font-size: 16px;
      border-radius: 4px;
    }
    &.warningMessage {
      margin: 10px;
    }
  }
  div:nth-child(2) {
    span {
      position: absolute;
      margin-bottom: 5px;
      font-size: 13px;
      color: rgb(37, 138, 247);
    }
    .warningMessage {
      display: block;
      font-size: 13px;
      color: red;
    }
    .numberMessage {
      display: none;
    }
  }
  div:nth-child(3) {
    margin-top: 20px;
    button {
      height: 50px;
      width: 460px;
      color: white;
      font-size: 17px;
      text-align: center;
      background-color: rgb(5, 108, 219);
      border-radius: 4px;
    }
  }
`;
