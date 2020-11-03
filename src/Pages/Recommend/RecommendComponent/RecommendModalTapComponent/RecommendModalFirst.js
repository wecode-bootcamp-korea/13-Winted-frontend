import React, { Component } from "react";
import { API_Detail } from "../../../../config";
import styled from "styled-components";

export class RecommendModalFirst extends Component {
  constructor() {
    super();
    this.state = {
      copySuccess: "",
      value: ""
    };
  }

  pushMessageHandler = e => {
    const TOKEN = localStorage.getItem("token");
    fetch(`${API_Detail}/recommend/send-kakaotalk`, {
      method: "POST",
      headers: { Authorization: TOKEN }
    })
      .then(res => res.json())
      .then(res => {
        // this.setState({
        //   userList: res.written_list
        // });
      });
  };
  copyToClipBoard = e => {
    this.input.select();
    document.execCommand("copy");
    e.target.focus();
    this.setState({
      copySuccess: "복사하였습니다.",
      value: this.state.value
    });
  };

  render() {
    const { copySuccess } = this.state;
    return (
      <ModalFirst>
        <div>
          <button>페이스북</button>
          <button onClick={this.pushMessageHandler}>메신저</button>
        </div>
        <div>
          <span>아래 링크를 복사하여 추천사를 요청해보세요.</span>
          <input
            type="text"
            value="WINTED에서 당신을 추천합니다."
            ref={input => (this.input = input)}
          />

          <input type="button" value="복사" onClick={this.copyToClipBoard} />
        </div>
        <div>
          <span>{copySuccess}</span>
        </div>
      </ModalFirst>
    );
  }
}

export default RecommendModalFirst;

const ModalFirst = styled.section`
  position: relative;
  height: 265px;
  padding: 20px;

  div:nth-child(1) {
    height: 140px;
    margin-top: 10px;
    button {
      height: 50px;
      width: 460px;
      border-radius: 4px;
      color: white;
      font-size: 17px;
      text-align: center;
    }
    button:nth-child(1) {
      background-color: rgb(5, 108, 219);
    }
    button:nth-child(2) {
      margin-top: 20px;
      background-color: rgb(37, 138, 247);
      &:hover {
        background-color: rgb(5, 108, 219);
      }
    }
  }
  div:nth-child(2) {
    height: 75px;
    span:nth-child(1) {
      font-size: 14px;
      color: rgb(203, 203, 203);
    }
    input {
      border: 1px solid rgb(203, 203, 203);
    }
    input[type="text"] {
      padding-left: 20px;
      height: 46px;
      width: 366px;
      font-size: 16px;
      outline: unset;
    }
    input[type="button"] {
      margin-top: 5px;
      height: 46px;
      width: 90px;
      border-left: none;
      background: none;
      color: rgb(203, 203, 203);
      font-size: 16px;
      cursor: pointer;
      outline: unset;
    }
    input[type="button"]:hover {
      color: black;
    }
  }
  div:nth-child(3) {
    height: 100px;

    span {
      position: absolute;
      margin-bottom: 5px;
      height: 100px;

      font-size: 13px;
      color: rgb(37, 138, 247);
    }
  }
`;
