import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Detailbox from "./DetailBox";
import { RESUME_LIST_API } from "../../config";

const ResumeDetail = ({ match }) => {
  const maxlen = value => value.length < 500;
  const { value, onChange, onInitialize } = useInput("", maxlen);
  const { resumeDetail, setResumeDetail } = useResumeDetail(
    onInitialize,
    match.params.id
  );
  console.log(resumeDetail);
  return (
    <Main>
      <article>
        <h1>{resumeDetail.title}</h1>
        <Section>
          <h2>간단 소개글</h2>
          <input
            value={value}
            onChange={onChange}
            placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요(제한:500자)"
          />
        </Section>
        {Object.keys(resumeDetail).length && (
          <>
            <Section>
              <h2>경력</h2>
              <button>+추가</button>
              {resumeDetail.career_list.map((career, idx) => (
                <Detailbox
                  key={idx}
                  name={career.company_name}
                  subName={career.position}
                  startDate={career.start_date}
                  endDate={career.end_date}
                  isTypeSimple={false}
                />
              ))}
            </Section>
            <Section>
              <h2>학력</h2>
              <button>+추가</button>
              {resumeDetail.education_list.map((education, idx) => (
                <Detailbox
                  key={idx}
                  name={education.university}
                  subName={education.major}
                  startDate={education.start_date}
                  endDate={education.end_date}
                  isTypeSimple={false}
                />
              ))}
            </Section>
            <Section>
              <h2>수상경력</h2>
              <button>+추가</button>
              {resumeDetail.award_list.map((award, idx) => (
                <Detailbox
                  key={idx}
                  name={award.activity}
                  subName={award.detail}
                  isTypeSimple={true}
                />
              ))}
            </Section>
            <Section>
              <h2>외국어</h2>
              <button>+추가</button>
              {resumeDetail.language_list.map((language, idx) => (
                <Detailbox
                  key={idx}
                  name={language.language}
                  subName={language.level}
                  isTypeSimple={true}
                />
              ))}
            </Section>
          </>
        )}
      </article>
    </Main>
  );
};

const useResumeDetail = (onInitialize, id) => {
  const [resumeDetail, setResumeDetail] = useState([]);
  useEffect(() => {
    fetch(`${RESUME_LIST_API}/${id}`, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.y4jC7L4ivmLmgcWVhi4zCvRuBZdExJC0ObJP8lzC_Fs"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setResumeDetail(res.resume_detail);
        onInitialize(res.resume_detail.introduction);
      });
  }, []);
  return { resumeDetail };
};

const useInput = (initialVal, validator) => {
  const [value, setValue] = useState(initialVal);

  const onInitialize = introduction => {
    setValue(introduction);
  };
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") willUpdate = validator(value);
    if (willUpdate) setValue(value);
  };
  return { value, onChange, onInitialize };
};

const Main = styled.main`
  margin-top: 50px;
  display: flex;
  justify-content: center;

  article {
    width: 1060px;

    h1 {
      font-size: 45px;
      margin: 70px 0;
      font-weight: 400;
    }
  }
`;

const Section = styled.section`
  margin-bottom: 50px;

  h2 {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    font-size: 17px;
  }

  button {
    font-size: 19px;
    color: #258bf7;
    margin-bottom: 30px;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 17px;
  }
`;

export default withRouter(ResumeDetail);
