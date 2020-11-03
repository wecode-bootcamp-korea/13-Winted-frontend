import React, { Component } from "react";
import NavDropdown from "./NavDropdown";
import Login from "../../Pages/Login/LogIn";
import { Link, withRouter } from "react-router-dom";
import "./Nav.scss";

const DROPDOWN = [
  { title: "이력서", link: "/resumelist" },
  { title: "추천", link: "/recommend" },
  { title: "이벤트", link: "/event" },
  { title: "매치업", link: "/mathup" }
];

class Nav extends Component {
  state = {
    menus: [],
    activeId: false,
    click: false,
    profileImage: ""
  };

  componentDidMount() {
    const userObj = localStorage.getItem("user_data");
    const profileImage = JSON.parse(userObj)?.profile_image_url;
    this.setState({ profileImage });
  }

  componentDidUpdate(prevProps, prevState) {
    const userObj = localStorage.getItem("user_data");
    const profileImage = JSON.parse(userObj)?.profile_image_url;
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ profileImage });
    }
  }

  openDropdown = activeId => {
    this.setState({ activeId });
  };

  handleMyPage = click => {
    const currentState = this.state.click;
    this.setState({ click: !currentState });
  };

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_data");
    window.location.reload();
  };

  render() {
    const { click, profileImage } = this.state;
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
              <i className="fas fa-search" />
            </li>
            <li className="logArea">
              {!profileImage ? (
                <Login />
              ) : (
                <div>
                  <img
                    className="loginUserImage"
                    src={profileImage}
                    width="40"
                    height="40"
                    alt="loginUserImg"
                    onClick={() => this.handleMyPage(true)}
                  ></img>
                  <div
                    className="logindropdowncontents"
                    onClick={this.handleMyPage}
                  >
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
                </div>
              )}
            </li>
            <li className="companyService">
              <button className="companyServiceBtn">기업 서비스</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
