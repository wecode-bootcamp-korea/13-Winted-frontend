import React from "react";
import styled from "styled-components";
import Job from "../../../Components/Job/Job";

const UpgradePosition = ({ jobList }) => {
  return (
    <section>
      <Title>
        <h2>연봉 업그레이드 포지션</h2>
        <button>더 보기</button>
      </Title>
      <List>
        {jobList.length > 0 &&
          jobList.map(job => (
            <li>
              <Job job={job} key={job.id}></Job>
            </li>
          ))}
      </List>
    </section>
  );
};

export default UpgradePosition;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1060px;
  margin: 0 auto 50px;

  button {
    color: #999;
    font-size: 20px;
    font-weight: 400;
    :hover {
      color: #757575;
    }
  }
`;

const List = styled.ul`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
  li {
    display: inline-block;
    vertical-align: top;
  }
`;
