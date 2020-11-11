import React, { Component } from "react";
import { API_Detail } from "../../config";
import "./Nav.scss";
import NavDropdown from "./NavDropdown";

const DROPDOWN = [
  { title: "이력서" },
  { title: "추천" },
  { title: "이벤트" },
  { title: "매치업" }
];

export default class Nav extends Component {
  state = {
    menus: [],
    activeId: false,
    isLogin: localStorage.getItem("authorization"),
    click: false
  };

  componentDidMount() {
    fetch(`${API_Detail}/company/category`)
      .then(res => res.json())

      .then(res => {
        this.setState({
          categoryList: res.category_list
        });
      });
  }

  openDropdown = activeId => {
    this.setState({ activeId });
  };

  handleMyPage = click => {
    this.setState({ click });
  };
  logout = () => {
    localStorage.removeItem("authorization");
    this.setState({ isLogin: false });
  };

  render() {
    const { isLogin, click } = this.state;
    return (
      <div className="Nav">
        <div className="navInner">
          <div className="log">WINTED</div>
          <ul className="menu">
            <li onMouseOver={() => this.openDropdown(true)}>탐색</li>
            <li onMouseOver={() => this.openDropdown(false)}>직군별 연봉</li>
            {DROPDOWN.map(el => (
              <li onMouseLeave={() => this.openDropdown(false)}>{el.title}</li>
            ))}
          </ul>
          <div className="dropdown">
            {this.state.activeId && (
              <NavDropdown leaveDropdown={this.openDropdown} />
            )}
          </div>
          <ul className="asideMenu">
            <li>
              <button className="fas fa-search"></button>
            </li>
            <li>
              {!isLogin ? (
                <button className="logButton">회원가입/로그인</button>
              ) : (
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/3237/3237472.svg"
                  width="30"
                  height="30"
                  alt="loginUserImg"
                  onClick={() => this.handleMyPage(true)}
                ></img>
              )}
            </li>
            <li>
              <button>기업 서비스</button>
            </li>
            <div
              onMouseOver={() => this.handleMyPage(true)}
              onMouseLeave={() => this.handleMyPage(false)}
            >
              {click && (
                <div className="logindropdown">
                  <ul>
                    <li>프로필</li>
                    <li>제안받기 현황</li>
                    <li>지원 현황</li>
                    <li>좋아요</li>
                    <li>북마크</li>
                    <li>MY 영상</li>
                    <li>포인트</li>
                    <li>설정</li>
                    <li onClick={this.logout}>로그아웃</li>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
