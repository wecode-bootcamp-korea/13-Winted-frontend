import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Job from "../../Components/Job/Job";
import { USER_LIKE_API } from "../../config";

const Favoritelist = () => {
  const [favoritelist, setFavoritelist] = useState([]);
  useEffect(() => {
    fetch(USER_LIKE_API, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.y4jC7L4ivmLmgcWVhi4zCvRuBZdExJC0ObJP8lzC_Fs"
      }
    })
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
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 1060px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default Favoritelist;
