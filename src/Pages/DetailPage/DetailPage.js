import React, { Component } from "react";
import styled from "styled-components";
import DetailSlider from "../DetailPage/DetailSlider/DetailSlider";
import MapContent from "../DetailPage/Map/MapContent";
import { DetailPage_API } from "../../config";

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      detail: {},
      likes_count: 0,
      color: "#dbdbdb",
      button: false,
      response_rate: 0
    };
  }

  componentDidMount() {
    fetch(`${DetailPage_API}/company/${this.props?.match.params.id}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "SUCCESS") {
          this.setState({
            detail: res.job_detail,
            response_rate: res.job_detail.response_rate
          });
        }
        if (this.state.response_rate > 50) {
          this.setState({ button: true });
        }
      });
  }

  handleChangeColor = () => {
    if (this.state.color === "#fe415c") {
      this.setState({ color: "#dbdbdb", likes_count: 0 });
    } else {
      this.setState({
        color: "#fe415c",
        likes_count: 1
      });
    }
  };

  handleChangeBtn = () => {
    if (this.state.response_rate > 50) {
      this.setState({ button: true });
    }
  };

  render() {
    const { detail } = this.state;

    return (
      <DetailPageBox>
        <DetailPageInner>
          <div className="rigntContents">
            <div className="companyImg">
              <DetailSlider imgUrl={detail.image_url} />
            </div>
            <div className="section_1">
              <h2>{detail.title}</h2>
              <div className="contents">
                <h6>{detail.name}</h6>
                {this.state.button && (
                  <button onChange={this.handleChangeBtn}> 응답률높음</button>
                )}
                <h5>{detail.city}</h5>
              </div>
              <div className="tagArea">
                <ul>
                  {detail.tag_list &&
                    detail.tag_list.map(tag => <li>{tag.name}</li>)}
                </ul>
              </div>
            </div>
            <div className="contents">
              <p>{detail.contents}</p>
            </div>
            <div className="section_2">
              <div className="section_2Contents">
                <span className="header">마감일</span>
                <span className="body">{detail.deadline}</span>
                <br></br>
                <span className="header">근무지역</span>
                <span className="body">{detail.address}</span>
              </div>
              <div className="map">
                <MapContent location={detail && detail.location} />
              </div>
            </div>
            <div className="section_3">
              <h5 className="position">윈티드님, 이 포지션을 찾고 계셨나요?</h5>
              <div className="companies"></div>
            </div>
          </div>
          <div className="asideArea">
            <div>
              <h3>채용보상금</h3>
              <ul>
                <li>
                  <h4>추천인</h4>
                  <p>{detail.compensation_recommender}원</p>
                </li>
                <li>
                  <h4>지원자</h4>
                  <p>{detail.compensation_applicant}원</p>
                </li>
              </ul>
            </div>
            <div className="button">
              <button className="bookMark">
                <li class="far fa-bookmark"></li>
                <li>북마크하기</li>
              </button>
              <ApplyButton>지원하기</ApplyButton>
            </div>
            <div className="likeArea">
              <button className="likeCount">
                <button
                  onClick={this.handleChangeColor}
                  style={{ color: this.state.color }}
                  className="fas fa-heart"
                ></button>
                <span>{this.state.likes_count}</span>
              </button>

              <button className="likePeople">
                <li className="fad fa-user-circle" alt="profileImage"></li>
              </button>
            </div>
          </div>
        </DetailPageInner>
      </DetailPageBox>
    );
  }
}
export default DetailPage;

const DetailPageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

const ApplyButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #36f;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

const DetailPageInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 360px);
  height: 100%;
  margin-bottom: 100px;

  .rigntContents {
    position: relative;
    left: 26%;
    width: 640px;
    height: 100%;
    .companyImg {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .section_1 {
      padding-top: 30px;
      width: 100%;
      margin: 0px 0 30px 0;
      h2 {
        display: block;
        color: #333;
        font-size: 22px;
        font-weight: 600;
      }
      .contents {
        align-items: center;
        text-align: row;
        padding: 10px 10px 0 10px;
        h6 {
          font-size: 13px;
          display: inline-block;
          padding-right: 10px;
        }
        button {
          margin: 10px;
          padding: 5px;
          font-size: 12px;
          color: #36f;
          border: 1px solid #36f;
        }
        h5 {
          display: flex;
          font-size: 15px;
          color: #999;
          display: inline-flex;
          font-weight: 400;
          padding-left: 10px;
        }
      }
      .tagArea {
        position: relative;
        align-items: center;
        padding-top: 10px;
        ul {
          li {
            display: inline-block;
            margin-right: 6px;
            margin-bottom: 10px;
            padding: 9px 14px;
            font-weight: 500;
            font-size: 12px;
            color: #333;
            background-color: #f3f5f8;
            border-radius: 25px;
          }
        }
      }
    }
    .contents {
      padding-bottom: 30px;
      width: 95%;

      p {
        line-height: 1.75;
        font-size: 16px;
        color: #333;
        font-weight: 400;
      }
    }
    .section_2 {
      border-top: 1px solid #eeeeee;
      padding-top: 20px;
      .section_2Contents {
        margin-bottom: 20px;
        .header {
          display: inline-block;
          font-size: 16px;
          font-weight: 600;
          color: #999;
          width: 80px;
          line-height: 40px;
        }
        .body {
          color: #333;
          display: inline-block;
          font-size: 16px;
          font-weight: 600;
        }
      }
      .map {
        padding-bottom: 80px;
        width: 100%;
        height: 280px;
      }
    }
    .section_3 {
      margin: 80px 0 0;
      .position {
        margin: 0 0 20px;
        font-size: 20px;
        font-weight: 600;
        color: #333;
      }
    }
  }
  .asideArea {
    position: fixed;
    right: 21%;
    width: 340px;
    height: 340px;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    padding: 24px 20px;
    border-radius: 3px;
    div {
      h3 {
        padding-bottom: 10px;
        font-size: 15px;
        font-weight: 600;
        text-align: left;
        color: #333;
      }
      ul {
        margin: 24px 0;
        li {
          float: left;
          width: 50%;
          text-align: left;
          h4 {
            font-size: 14px;
            font-weight: 700;
            color: #999;
            margin-bottom: 8px;
            line-height: 1.2%;
          }
          p {
            font-size: 16px;
            color: #333;
            font-weight: 800;
            padding-top: 10px;
          }
        }
      }
    }
    .button {
      margin-top: 90px;
      .bookMark {
        width: 100%;
        height: 50px;
        border-radius: 25px;
        margin-top: 30px;
        border: 1px solid #e1e2e3;
        margin-bottom: 10px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        li:first-child {
          line-height: 48px;
          color: #00c8a2;
        }
        li:last-child {
          line-height: 48px;
          color: #00c8a2;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          list-style: none;
          padding-left: 10px;
        }
      }
    }
    .likeArea {
      display: flex;
      margin-top: 20px;
      cursor: pointer;
      .likeCount {
        height: 30px;
        border-radius: 15px;
        border: 1px solid #e1e2d3;
        margin-right: 12px;
        padding: 0 15px;
        button {
          padding-right: 10px;
          font-size: 15px;
        }
        span {
          font-size: 15px;
        }
      }
      .likePeople {
        li {
          font-size: 24px;
          color: #dbdbdb;
        }
      }
    }
  }
`;
