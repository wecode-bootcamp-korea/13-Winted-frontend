import React, { Component } from "react";
import "../RecommendComponent/Recommend.scss";
import styled from "styled-components";

class RecommendUserModal extends React.Component {
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
        <ModalUserBox>
          <div
            className="userModalOveray"
            onClick={userVisibleModalState}
          ></div>
          <div className="userModalBoard">
            <header>
              <span>추천사 확인</span>
              <button className="xBtn" onClick={userVisibleModalState}>
                X
              </button>
            </header>
            <div className="modalContent">
              <div className="userProfile">
                <img className="userImg" src={profile_image_url} />
                <div className="textBox">
                  <span className="userName">{user_name}</span>
                  <div className="categoryBox">
                    <p>{category}</p>
                    <p>{create_time}</p>
                  </div>
                </div>
              </div>
              <span className="userContent">{contents}</span>
            </div>
          </div>
        </ModalUserBox>
      </>
    );
  }
}

export default RecommendUserModal;

const ModalUserBox = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;

  .userModalOveray {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }

  .userModalBoard {
    position: relative;
    display: flex;
    flex-direction: column;
    bottom: 0px;
    width: 500px;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 6px 5px rgba(0, 0, 0, 0.23);
    border-radius: 10px;

    header {
      display: flex;
      justify-content: center;
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
    .modalContent {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 500px;
      height: 307px;
      .userProfile {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
        width: 500px;
        height: 90px;
        border-bottom: 1px solid rgb(203, 203, 203);
        .userImg {
          margin-top: 0;
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          }
        .textBox {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding: 3px 3px 3px 7px;
          width: 500px;
          height: 50px;
          .userName {
            width: 400px;
            height: 18px;
            font-size: 18px;
            font-weight: 500;
          }
          .categoryBox {
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
      .userContent {
        padding: 20px;
        line-height: 20px;
      }
    }
  }
`;
