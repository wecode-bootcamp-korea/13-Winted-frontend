import React, { Component } from "react";
import "../RecommendComponent/Recommend.scss";
import styled from "styled-components";

class RecommendModal extends React.Component {
  constructor() {
    super();
    this.state = {
      ID: "123456",
      email: "@"
    };
  }
  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { visibleState } = this.props;
    const { ID, email } = this.state;
    return (
      <ModalFirstBox>
        <div className="modalOveray"></div>
        <div className="modalBoard">
          <header>
            <button onClick={visibleState}>X</button>
          </header>
          <div className="modalContent">
            <div className="title">
              <span>아직 Winted 회원이 아닌</span>
              <span>지인을 SMS로 추천합니다.</span>
            </div>
            <form>
              <input
                name="ID"
                type="text"
                placeholder="지인의 ID"
                onChange={this.inputHandler}
              ></input>
              <div className="inputBox">
                <span
                  className={ID.length > 5 ? "inputMessage" : "warningMessage"}
                >
                  올바른 아이디를 입력하세요.
                </span>
              </div>

              <input
                name="email"
                type="email"
                placeholder="지인의 EMAIL"
                onChange={this.inputHandler}
              ></input>
              <div className="inputBox">
                <span
                  className={
                    email.includes("@") ? "inputMessage" : "warningMessage"
                  }
                >
                  올바른 이메일을 입력하세요.
                </span>
              </div>
            </form>
          </div>
          <div className="btnBox">
            <button
              className={
                email.includes("@") && ID.length > 6 ? "clickBtn" : "unClick"
              }
            >
              {" "}
              추천하기
            </button>
          </div>
        </div>
      </ModalFirstBox>
    );
  }
}

export default RecommendModal;

const ModalFirstBox = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;

  .modalOveray {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }
  .modalBoard {
    position: relative;
    display: flex;
    flex-direction: column;
    bottom: 0px;
    width: 500px;
    height: 430px;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 6px 5px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    header {
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      height: 50px;
      button {
        color: rgb(203, 203, 203);
        font-size: 20px;
      }
    }
    .modalContent {
      padding: 20px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 72px;
        margin-bottom: 30px;
        font-size: 24px;
        span {
          display: block;
          margin-top: 10px;
        }
      }
      form {
        input[type="text"] {
          padding-left: 20px;
          width: 460px;
          height: 50px;
          background-color: rgb(243, 243, 243);
          border: none;
          border-radius: 4px;
          outline: unset;
        }
      }
      input[type="email"] {
        margin-top: 23px;
        padding-left: 20px;
        width: 460px;
        height: 50px;
        background-color: rgb(243, 243, 243);
        border: none;
        border-radius: 4px;
        outline: unset;
      }

      .inputBox {
        span {
          position: absolute;
          margin: 5px 0;
          padding-left: 6px;
          font-size: 13px;
          color: rgb(37, 138, 247);
        }
        .warningMessage {
          display: block;
          font-size: 13px;
          color: red;
        }
        .inputMessage {
          display: none;
        }
      }
    }
  }
  .btnBox {
    height: 85px;
    padding: 10px 20px;
    button {
      height: 50px;
      width: 460px;
      background-color: rgb(203, 203, 203);
      border-radius: 4px;
      color: white;
      font-size: 18px;
      font-weight: 700;
      text-align: center;
    }
    .clickBtn {
      background-color: rgb(5, 108, 219);
    }
    .unClick {
      background-color: rgb(203, 203, 203);
    }
  }
`;
