import React, { Component } from "react";
import RecommendUserModal from "../RecommendComponent/RecommendUserModal";
import "../RecommendComponent/Recommend.scss";
import styled from "styled-components";

class RecommendUserBox extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      open: false
    };
  }

  userModalHandler = e => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const {
      profile_image_url,
      handleDeleteItem,
      id,
      user_name,
      category,
      contents,
      create_time
    } = this.props;
    const { open } = this.state;
    return (
      <UserBoxWrap>
        <div>
          <img src={profile_image_url} />
          <button className="rcmBtn">
            <i
              className="far fa-thumbs-up"
              onMouseEnter={() => this.setState({ isShown: true })}
              onMouseLeave={() => this.setState({ isShown: false })}
              onClick={() => handleDeleteItem(id)}
            />
          </button>
          <div className="nameBox">
            <span>{user_name}</span>
          </div>
          <div className="relationBox">
            <p>{category}</p>
          </div>
          <button onClick={this.userModalHandler}>
            <span>추천사 확인</span>
          </button>
          {open && (
            <RecommendUserModal
              userVisibleModalState={this.userModalHandler}
              user_name={user_name}
              profile_image_url={profile_image_url}
              category={category}
              contents={contents}
              create_time={create_time}
            />
          )}
        </div>
      </UserBoxWrap>
    );
  }
}

export default RecommendUserBox;

const UserBoxWrap = styled.section`
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 248px;
  height: 248px;
  background-color: white;
  border: 1px solid rgb(194, 194, 194);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 248px;
    height: 248px;
    img {
      margin-top: 30px;
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    .rcmBtn {
      border: none;
      position: absolute;
      top: 10px;
      right: -20px;
      font-size: 20px;
      color: rgb(153, 153, 153);

      i:hover {
        position: relative;
        &:after {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 85px;
          height: 40px;
          padding: 0px;
          content: "나도 추천하기";
          z-index: 200;
          top: -50px;
          left: 15px;
          background: #000;
          color: #fff;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          font-size: 13px;
          font-weight: 700;
        }
      }
    }

    .nameBox {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      width: 208px;
      height: 30px;
      font-size: 30px;
      span {
        font-size: 18px;
        font-weight: 700px;
      }
    }
    .relationBox {
      width: 223px;
      height: 21px;
      margin-bottom: 24px;
      p {
        color: rgb(153, 153, 153);
        font-size: 14px;
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 110px;
      height: 36px;
      margin-bottom: 30px;
      color: rgb(153, 153, 153);
      border: 1px solid rgb(153, 153, 153);
      border-radius: 25px;
      span {
        font-size: 15px;
        padding-top: 2px;
      }
    }
  }
`;
