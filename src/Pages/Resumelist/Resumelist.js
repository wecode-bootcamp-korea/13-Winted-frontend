import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Resume from "./Resume";
import { RESUME_LIST_API } from "../../config";

const Resumelist = () => {
  const { resumeList, setIsLoading } = useResume();
  const createResume = () => {
    fetch(RESUME_LIST_API, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.y4jC7L4ivmLmgcWVhi4zCvRuBZdExJC0ObJP8lzC_Fs"
      }
    })
      .then(res => res.json())
      .then(res => {
        setIsLoading(true);
      });
  };

  return (
    <Main>
      <Header>
        <span>최근문서</span>
        <span>원티드 이력서 소개ⓘ</span>
      </Header>
      <Article>
        <section>
          <NewResume onClick={createResume}>
            <i class="far fa-clone"></i>새 이력서 작성
          </NewResume>
          {resumeList.map(el => (
            <Resume
              key={el.id}
              id={el.id}
              title={el.title}
              createTime={el.create_time}
              status={el.status}
              setIsLoading={setIsLoading}
            ></Resume>
          ))}
        </section>
      </Article>
    </Main>
  );
};

const useResume = () => {
  const [resumeList, setResumeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading)
      fetch(RESUME_LIST_API, {
        method: "GET",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.y4jC7L4ivmLmgcWVhi4zCvRuBZdExJC0ObJP8lzC_Fs"
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setResumeList(res.resume_list);
          setIsLoading(false);
        });
  }, [isLoading]);
  return { resumeList, setIsLoading };
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: #eeeeee;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  font-weight: bold;

  span {
    &:last-child {
      color: #258bf7;
    }
  }
`;
const Article = styled.article`
  width: 1060px;

  section {
    display: flex;
    width: 1100px;
    margin-left: -20px;
    flex-wrap: wrap;
  }
`;

const NewResume = styled.div`
  width: 250px;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 0 0 20px 20px;
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  font-weight: 800;

  cursor: pointer;

  i {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #258bf7;
    color: white;
    padding: 26px;
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export default Resumelist;
