import React, { Component } from "react";
import RecommendModalFirst from "../RecommendComponent/RecommendModalTapComponent/RecommendModalFirst";
import RecommendModalSecond from "../RecommendComponent/RecommendModalTapComponent/RecommendModalSecond";
import RecommendModalThird from "../RecommendComponent/RecommendModalTapComponent/RecommendModalThird";
import RecommendModalFourth from "../RecommendComponent/RecommendModalTapComponent/RecommendModalFourth";
import "../RecommendComponent/Recommend.scss";
import "../RecommendComponent/RecommendModalTap.scss";
import styled from "styled-components";

const tapMenuObj = {
  0: <RecommendModalFirst />,
  1: <RecommendModalSecond />,
  2: <RecommendModalThird />,
  3: <RecommendModalFourth />
};

class RecommendModalTap extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTap: 0
    };
  }

  clickModalTapHandler = id => {
    this.setState({
      activeTap: id
    });
  };

  render() {
    const { visibleState } = this.props;
    const { activeTap } = this.state;
    return (
      <>
        <ModalTapBox>
          <div className="modalTapOveray"></div>
          <div className="modalTapBoard">
            <header>
              <span>추천 요청</span>
              <button onClick={visibleState}>X</button>
            </header>
            <div className="modalTapContent">
              <div className="tapTitle">
                {["링크", "이메일", "SMS", "원티드 친구"].map((el, index) => {
                  return (
                    <button
                      onClick={() => this.clickModalTapHandler(index)}
                      className={
                        this.state.activeTap === index
                          ? "clickModalBtn"
                          : "unClickModalBtn"
                      }
                    >
                      {el}
                    </button>
                  );
                })}
              </div>
              {tapMenuObj[activeTap]}
            </div>
          </div>
        </ModalTapBox>
      </>
    );
  }
}

export default RecommendModalTap;

const ModalTapBox = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;

  .modalTapOveray {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }

  .modalTapBoard {
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
  height: 50px;
  border-bottom: 1px solid rgb(203, 203, 203);

    span {
    position: relative;
    display: block;
    margin-top: 10px;
  }

    button {
    position: absolute;
    right: 20px;
    top: 15px;
    color: rgb(203, 203, 203);
    font-size: 20px;
    }
  }

 .modalTapContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .tapTitle {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 67px;
  font-size: 17px;
  border-bottom: 1px solid rgb(203, 203, 203);
  
  button {
  padding: 15px 15px 13px 15px;
  }

  }

}
`;
