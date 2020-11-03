import React, { Component } from "react";
import RecommendListBox from "../RecommendComponent/RecommendListBox";
import { API_Detail } from "../../../config";
import styled from "styled-components";

export class RecommendList extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      open: false
    };
  }

  checkModalHandler = e => {
    this.setState({
      open: !this.state.open
    });
  };

  handleDeleteItem = id => {
    fetch(`${API_Detail}/recommend?id=${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        contents: ""
      })
    }).then(res => res.json());
    const filterArray = this.state.userList.filter(user => {
      if (user.id !== id) {
        return user;
      }
    });
    this.setState({
      userList: filterArray
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
        console.log(">>>>>>", res);
        if (res.message === "SUCCESS") {
          this.setState({
            userList: res.written_list
          });
        }
      });
  }

  render() {
    const { userList } = this.state;
    console.log("????", userList);
    return (
      <ListProfileBox>
        {userList.length > 0 &&
          userList.map((userProfile, idx) => {
            console.log("userProfile", userProfile);
            return (
              <RecommendListBox
                key={idx}
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
      </ListProfileBox>
    );
  }
}

export default RecommendList;

const ListProfileBox = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 280px);
  grid-template-columns: repeat(4, 1fr);
`;
