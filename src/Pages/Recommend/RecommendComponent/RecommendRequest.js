import React, { Component } from "react";
import RecommendBox from "./RecommendBox";
import RecommendVehicles from "../RecommendComponent/RecommendVehicles";
import RecommendUserBox from "../RecommendComponent/RecommendUserBox";
import RecommendModalTap from "../RecommendComponent/RecommendModalTap";
import { API_Detail } from "../../../config";
import styled from "styled-components";

export class RecommendRequest extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      open: false
    };
  }

  modalTapHandler = e => {
    this.setState({
      open: !this.state.open
    });
  };

  componentDidMount() {
    const TOKEN = localStorage.getItem("token");
    fetch(`${API_Detail}/recommend?type=written`, {
      method: "GET",
      headers: { Authorization: TOKEN }
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "SUCCESS") {
          this.setState({
            userList: res.written_list
          });
        }
      });
  }

  handleDeleteItem = id => {
    const filterArray = this.state.userList.filter(user => {
      if (user.id !== id) {
        return user;
      }
    });
    this.setState({
      userList: filterArray
    });
  };

  render() {
    const { open, userList } = this.state;
    return (
      <UserProfileBox>
        <RecommendBox openState={this.modalTapHandler}>
          <RecommendVehicles
            className={"fas fa-user-plus"}
            text={"추천 요청"}
          />
        </RecommendBox>
        {open && <RecommendModalTap visibleState={this.modalTapHandler} />}
        {userList.length > 0 &&
          userList.map(userProfile => {
            return (
              <RecommendUserBox
                handleDeleteItem={this.handleDeleteItem}
                id={userProfile.id}
                user_name={userProfile.user_name}
                profile_image_url={userProfile.profile_image_url}
                category={userProfile.category}
                contents={userProfile.contents}
                create_time={userProfile.create_time}
              />
            );
          })}
      </UserProfileBox>
    );
  }
}

export default RecommendRequest;

const UserProfileBox = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 280px);
  grid-template-columns: repeat(4, 1fr);
`;
