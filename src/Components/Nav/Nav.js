import React, { Component } from "react";
import "./Nav.scss";
import NavDropdown from "./NavDropdown";
import { Link } from "react-router-dom";

const DROPDOWN = [
  { title: "이력서", link: "/resumelist" },
  { title: "추천", link: "/recommend" },
  { title: "이벤트", link: "/event" },
  { title: "매치업", link: "/mathup" }
];

export default class Nav extends Component {
  state = {
    menus: [],
    activeId: false,
    isLogin: localStorage.getItem("authorization"),
    click: false,
    user_data: {}
  };

  componentDidMount() {
    const user_data = {
      email: "snatty0219@nate.com",
      id: 1524347716,
      name: "김수연",
      profile_image_url:
        "http://k.kakaocdn.net/dn/uiA0S/btqM4zVABOM/k3wXYyPiVj9hCoCgFZYez0/img_640x640.jpg"
    };
    localStorage.setItem("user_data", user_data);
    this.setState({ user_data });
  }

  openDropdown = activeId => {
    this.setState({ activeId });
  };

  handleMyPage = click => {
    const currentState = this.state.click;
    this.setState({ click: !currentState });
  };
  logout = () => {
    localStorage.removeItem("authorization");
    localStorage.removeItem("user_data");
    this.setState({ isLogin: false });
  };

  render() {
    const { isLogin, click, user_data } = this.state;
    return (
      <div className="Nav">
        <div className="navInner">
          <div className="log">WINTED</div>
          <ul className="menu">
            <li onMouseOver={() => this.openDropdown(true)}>
              <Link to="/joblist" className="Link">
                탐색
              </Link>
            </li>
            <li onMouseOver={() => this.openDropdown(false)}>
              <Link to="/salary" className="Link">
                직군별 연봉
              </Link>
            </li>
            {DROPDOWN.map(el => (
              <li>
                <Link to={el.link} className="Link">
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="dropdown">
            {this.state.activeId && (
              <NavDropdown leaveDropdown={this.openDropdown} />
            )}
          </div>
          <ul className="asideMenu">
            <li className="searchIcon">
              <button className="fas fa-search"></button>
            </li>
            <li className="logArea">
              {!isLogin ? (
                <button className="logButton">회원가입/로그인</button>
              ) : (
                <img
                  className="loginUserImage"
                  src={user_data.profile_image_url}
                  width="40"
                  height="40"
                  alt="loginUserImg"
                  onClick={() => this.handleMyPage(true)}
                ></img>
              )}
            </li>
            <li className="companyService">
              <button className="companyServiceBtn">기업 서비스</button>
            </li>
            <div className="logindropdowncontents" onClick={this.handleMyPage}>
              {click && (
                <div className="logindropdown">
                  <ul className="logindropdownlist">
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
