import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { RESUME_LIST_API } from "../../config";

const Resume = ({ title, createTime, status, id, history, setIsLoading }) => {
  const goToDetail = id => {
    history.push(`/resume/${id}`);
  };

  const deleteResume = id => {
    fetch(`${RESUME_LIST_API}?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(() => {
      setIsLoading(true);
    });
  };
  return (
    <ResumeBox status={status}>
      <article onClick={() => goToDetail(id)}>
        <h1>{title}</h1>
        <span>{createTime}</span>
      </article>
      <footer>
        <div>
          <span>한</span>
          <span>{status ? "작성 완료" : "작성 중"}</span>
        </div>
        <i class="fas fa-ellipsis-v" onClick={() => deleteResume(id)}></i>
      </footer>
    </ResumeBox>
  );
};

const ResumeBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 190px;
  background-color: white;
  margin: 0 0 20px 20px;
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  color: ${props => (props.status ? "black" : "gray")};

  article {
    height: calc(100% - 40px);
    padding: 20px;

    h1 {
      margin-bottom: 10px;
    }

    span {
      color: gray;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    border-top: 0.1px solid rgba(0, 0, 0, 0.2);
    height: 40px;
    padding: 10px 20px 0 20px;

    span {
      margin-right: 10px;

      &:first-child {
        border: 1px solid;
        border-radius: 3px;
        font-size: 12px;
        height: 20px;
        width: 20px;
        text-align: center;
        padding: 2px;
      }

      &:nth-child(2) {
        font-weight: 800;
      }
    }
  }
`;

export default withRouter(Resume);
