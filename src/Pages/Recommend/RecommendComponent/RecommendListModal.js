import React, { Component } from "react";
import "../RecommendComponent/Recommend.scss";
import styled from "styled-components";

class RecommendListModal extends React.Component {
  render() {
    const {
      userVisibleModalState,
      profile_image_url,
      user_name,
      category,
      create_time,
      contents
    } = this.props;
    return (
      <>
        <ModalListBox>
          <div className="listModalOveray"></div>
          <div className="listModalBoard">
            <header>
              <span>추천사 확인</span>
              <button className="xBtn" onClick={userVisibleModalState}>
                X
              </button>
            </header>
            <div className="listContent">
              <div className="listProfile">
                <img className="listUserImg" src={profile_image_url} />
                <div className="listTextBox">
                  <span className="listUserName">{user_name}</span>
                  <div className="listCategoryBox">
                    <p>{category}</p>
                    <p>{create_time}</p>
                  </div>
                </div>
              </div>
              <span className="listUserContent">{contents}</span>
            </div>
            <div className="ListBtnBox">
              <button>
                <span>삭제</span>
              </button>
              <button>
                <span>수정</span>
              </button>
            </div>
          </div>
        </ModalListBox>
      </>
    );
  }
}

export default RecommendListModal;

const ModalListBox = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  .listModalOveray {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }

  .listModalBoard {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    bottom: 0px;
    width: 500px;
    height: 600px;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 6px 5px rgba(0, 0, 0, 0.23);
    border-radius: 10px;

    header {
      text-align: center;

      padding: 10px 20px 10px 20px;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid rgb(203, 203, 203);
      span {
        position: relative;
        display: block;
        margin-top: 10px;
        font-weight: 500;
        font-size: 17px;
      }
      .xBtn {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 10px;
        height: 10px;
        color: rgb(203, 203, 203);
        font-size: 20px;
        border: none;
      }
    }
    .listContent {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 500px;
      .listProfile {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
        width: 500px;
        height: 90px;
        border-bottom: 1px solid rgb(203, 203, 203);
        .listUserImg {
          margin-top: 0;
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .listTextBox {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding: 3px 3px 3px 7px;
          width: 500px;
          height: 50px;
          .listUserName {
            width: 400px;
            height: 18px;
            font-size: 18px;
            font-weight: 500;
          }
          .listCategoryBox {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 400px;
            height: 18px;
            p {
              font-size: 13px;
              color: rgb(203, 203, 203);
            }
          }
        }
      }
    }
    .listUserContent {
      width: 500px;
      height: 237px;
      padding: 20px;
      line-height: 20px;
    }
  }
  .ListBtnBox {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 5px;
    width: 500px;
    height: 80px;
    button {
      width: 225px;
      height: 50px;
      border-radius: 5px;
      margin: 0 5px;
      span {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
      }
    }
    button:nth-child(1) {
      border: 1px solid rgb(5, 108, 219);
      color: rgb(5, 108, 219);
    }
    button:nth-child(2) {
      background-color: rgb(5, 108, 219);
      color: white;
    }
  }
`;
