import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Job from "../../Components/Job/Job";
import { USER_LIKE_API } from "../../config";

const Favoritelist = () => {
  const [favoritelist, setFavoritelist] = useState([]);
  const option = localStorage.getItem("token")
    ? {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    : {
        method: "GET"
      };
  useEffect(() => {
    fetch(USER_LIKE_API, option)
      .then(res => res.json())
      .then(res => {
        setFavoritelist(res.job_list);
      });
  }, []);
  return (
    <Main>
      <ul>
        {favoritelist.map(favorite => (
          <Job key={favorite.id} job={favorite} />
        ))}
      </ul>
    </Main>
  );
};

const Main = styled.main`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  height: 100vh;
  ul {
    width: 1060px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default Favoritelist;
