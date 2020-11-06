import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { USER_LIKE_API } from "../../config";

const Job = ({ job, setJobLoading, history }) => {
  const {
    id,
    title,
    name,
    city,
    likes_count,
    image_url,
    compensation,
    like_status,
    response_rate
  } = job;

  const onLike = () => {
    fetch(USER_LIKE_API, {
      method: like_status ? "DELETE" : "POST",
      body: JSON.stringify({
        company_id: id
      }),
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.FCoW9gw-N4X3Xc3VS5-rKWXj7khyyM1e9OPdyXaLLeQ"
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === "SUCCESS") setJobLoading(true);
      });
  };

  const goToDetail = id => {
    history.push(`/detail/${id}`);
  };

  return (
    <JobBox BGI={image_url} isliked={like_status} response_rate={response_rate}>
      <header alt={name}>
        <LikeBox onClick={onLike}>
          ♥ <span> {likes_count}</span>
        </LikeBox>
      </header>
      <span onClick={() => goToDetail(id)}>{title}</span>
      <span>{name}</span>
      {response_rate > 85 && <ResponseRate>응답률 매우 높음</ResponseRate>}
      <span>서울.{city}</span>
      <span>채용보상금 {compensation} 원</span>
    </JobBox>
  );
};

const JobBox = styled.li`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 30px 0;
  padding: 10px;
  header {
    position: relative;
    border-radius: 5px;
    width: 100%;
    height: 200px;
    background-image: url(${props => props.BGI});
    background-size: cover;
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 12px;
    &:nth-child(2) {
      font-weight: 700;
      font-size: 18px;
      cursor: pointer;
      font-size: 16px;
    }
    &:nth-child(3) {
      font-weight: 700;
      font-size: 14px;
    }
  }
`;
const LikeBox = styled.div`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  color: ${props => (props.isliked ? "red" : "white")};
  padding: 8px 10px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  span {
    color: white;
  }
`;

const ResponseRate = styled.span`
  color: #00aead;
  border: 1px solid #00aead;
  padding: 3px;
  font-size: 10px;
`;

export default withRouter(Job);
