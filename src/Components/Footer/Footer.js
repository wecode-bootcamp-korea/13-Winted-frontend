import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <div>
          <img src="./images/footer-logo.JPG" alt="logo" />
          {MENUS.map((menu, idx) => (
            <h4 key={idx}>{menu}</h4>
          ))}
        </div>
        <select>
          {LANGUAGES.map((language, idx) => (
            <option value={language.key} key={idx}>
              {language.value}
            </option>
          ))}
        </select>
      </div>
      <p>
        (주)윈티드랩 (대표이사:김형욱) | 서울특별시 강남구 테헤란로 427 |
        통신판매번호 : 2016-서울선릉-00209
        <br />
        유료직업소개사업등록번호 : (국내) 제2020-110911-49-6-00001호 | (국외)
        F1201020170005 | 사업자등록번호 : 000-86-200OK
        <br />© Wintedlab, Inc.
      </p>
    </FooterWrapper>
  );
};

export default Footer;

const MENUS = ["WINTED", "이용약관", "개인정보 처리방침", "고객센터"];
const LANGUAGES = [
  { KR: "한국 (한국어)" },
  { JP: "日本 (日本語)" },
  { TW: "台灣 (繁體中文)" },
  { HK: "Worldwide (English)" }
];

const FooterWrapper = styled.footer`
  padding: 30px 0 70px;
  background-color: #2b2d2e;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1060px;
    margin: 0 auto;

    div {
      width: 80%;
      margin-right: 300px;

      img {
        width: auto;
        height: 20px;
      }

      h4 {
        color: #d1d1d1;
        word-break: keep-all;
      }
    }

    select {
      width: 250px;
      height: 36px;
      background: #000;
      border: none;
      color: #d1d1d1;
      outline: none;
    }
  }

  p {
    display: flex;
    width: 90%;
    max-width: 1060px;
    margin: 25px auto 0;
    color: #d1d1d1;
    font-size: 12px;
    line-height: 1.2rem;
  }
`;
