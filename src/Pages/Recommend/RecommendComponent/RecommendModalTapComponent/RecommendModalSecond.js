import React, { Component } from "react";
import styled from "styled-components";

export class RecommendModalSecond extends Component {
  constructor() {
    super();
    this.state = {
      email: "@"
    };
  }
  handleEmailInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const isValid = this.state.email.includes("@");
    return (
      <ModalSceond className={isValid ? "emailMessage" : "warningMessage"}>
        <div>
          <input
            name="email"
            type="text"
            placeholder="이메일을 입력해 주세요."
            onChange={this.handleEmailInput}
            className="warningMessage"
          />
        </div>
        <div>
          <span className={isValid ? "emailMessage" : "warningMessage"}>
            올바른 이메일을 입력하세요.
          </span>
        </div>
        <div>
          <button>전송</button>
        </div>
      </ModalSceond>
    );
  }
}

export default RecommendModalSecond;

const ModalSceond = styled.section`
  height: 160px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.warningMessage {
    height: 170px;
  }

  div:nth-child(1) {
    input {
      height: 50px;
      width: 460px;
      padding-left: 20px;
      border: 1px solid rgb(203, 203, 203);
      font-size: 16px;
      border-radius: 4px;
    }
    &.warningMessage {
      margin-bottom: 10px;
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
    .emailMessage {
      display: none;
    }
  }
  div:nth-child(3) {
    margin-top: 20px;
    button {
      height: 50px;
      width: 460px;
      border-radius: 4px;
      color: white;
      font-size: 17px;
      text-align: center;
      background-color: rgb(5, 108, 219);
    }
  }
`;
