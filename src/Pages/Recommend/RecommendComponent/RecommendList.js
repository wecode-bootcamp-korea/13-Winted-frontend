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
    const TOKEN =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.y4jC7L4ivmLmgcWVhi4zCvRuBZdExJC0ObJP8lzC_Fs";
    fetch(`${API_Detail}/recommend?type=written`, {
      method: "GET",
      headers: { Authorization: TOKEN }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          userList: res.written_list
        });
      });
  }

  render() {
    const { userList } = this.state;
    return (
      <ListProfileBox>
        {userList.map((userProfile, idx) => {
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
