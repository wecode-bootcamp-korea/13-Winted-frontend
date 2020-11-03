import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <div>
          <img src="./images/footer-logo.JPG" alt="logo" />
          <h4>이용약관</h4>
          <h4>개인정보 처리방침</h4>
          <h4>고객센터</h4>
        </div>
        <select name="" id="">
          <option value="KR">한국 (한국어)</option>
          <option value="JP">日本 (日本語)</option>
          <option value="TW">台灣 (繁體中文)</option>
          <option value="HK">Worldwide (English)</option>
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
