import React from "react";
import styled from "styled-components";
import theme from "../../../Styles/theme";

const Banner = () => {
  return (
    <BannerWrapper>
      <p>
        *이 데이터는 웹사이트 클론을 위해 가공된 직무 별 요구 경력(최저, 최대)과
        연봉(최저, 최대)을 바탕으로 계산된 예상 연봉 데이터입니다.
      </p>
      <div>
        <h2>이제 밤새워 채용사이트 보지 마세요.</h2>
        <p>
          윈티드 매치업에 프로필을 등록하면, 기업의 인사담당자가 직접 면접을
          제안합니다.
        </p>
        <ul>
          {ICONS.map((icon, idx) => (
            <i className={icon} key={idx} />
          ))}
        </ul>
        <button>시작하기</button>
      </div>
    </BannerWrapper>
  );
};

export default Banner;

const ICONS = [
  "fab fa-html5",
  "fab fa-css3",
  "fab fa-slack",
  "fab fa-js",
  "fab fa-react"
];

const BannerWrapper = styled.div`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto 80px;

  p:first-child {
    margin: 10px 0;
    color: #b5b5b5;
    font-size: 14px;
  }

  div {
    margin: 42px 0 40px;
    padding: 55px;
    background: #fff;

    h2 {
      margin: 0 0 20px;
      color: ${theme.mainBlue};
      font-size: 40px;
    }

    > P {
      margin: 0 0 40px;
      font-size: 20px;
    }

    ul > i {
      width: 48px;
      height: 48px;
      margin: 6px;
      border: 1px solid #eee;
      font-size: 48px;
      text-align: center;
    }

    button {
      width: 100%;
      height: 54px;
      margin-top: 30px;
      border: 0;
      border-radius: 27px;
      background-color: ${theme.deepBlue};
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
    }
  }
`;
