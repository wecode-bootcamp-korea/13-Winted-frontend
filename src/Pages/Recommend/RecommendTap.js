import React, { Component } from "react";
import Recommend from "./RecommendComponent/Recommend";
import RecommendReuest from "./RecommendComponent/RecommendRequest";
import RecommendList from "./RecommendComponent/RecommendList";
import "../Recommend/RecommendTap.scss";
import styled from "styled-components";

const menuPage = {
  0: <Recommend />,
  1: <RecommendReuest />,
  2: <RecommendList />,
  3: <Recommend />
};

export class RecommendTap extends Component {
  constructor() {
    super();
    this.state = {
      activeMenu: 0
    };
  }
  clickHandler = menuId => {
    this.setState({ activeMenu: menuId });
  };

  render() {
    const { activeMenu } = this.state;
    return (
      <RecommendPage>
        <Main>
          <Header>
            <div>
              {["추천하기", "내가 받은 추천", "내가 한 추천", "설정"].map(
                (content, index) => {
                  return (
                    <button
                      onClick={() => this.clickHandler(index)}
                      className={
                        activeMenu === index ? "clickBtn" : "unClickBtn"
                      }
                    >
                      {content}
                    </button>
                  );
                }
              )}
            </div>
            <button>
              <span>원티드 추천 소개</span>
              <i class="fas fa-info-circle"></i>
            </button>
          </Header>
          {menuPage[activeMenu]}
        </Main>
      </RecommendPage>
    );
  }
}

export default RecommendTap;

const RecommendPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vw;
  top: 0;
  background-color: rgb(248, 248, 250);
`;

const Main = styled.div`
  margin-top: 50px;
  width: 1113px;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 20px 0;
  width: inherit;
  height: 20px;
  font-size: 18px;
  font-weight: 500;
  div {
    button {
      margin-right: 40px;
      cursor: pointer;
    }
  }
  button {
    span {
      margin-right: 8px;
      font-size: 16px;
      color: rgb(37, 138, 247);
    }
  }
`;
