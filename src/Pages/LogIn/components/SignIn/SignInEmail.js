import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { CHECK_API } from "../../../../config";
import styled from "styled-components";
import KakaoButton from "./KakaoButton";
import theme from "../../../../Styles/theme";

const SignInEmail = ({
  handleModalWindow,
  maintainModalWindow,
  handleSignInEmailWindow,
  handleSignInPwWindow,
  handleSignUpWindow,
  saveUserInformation,
  isSignInEmail,
  history
}) => {
  const [email, setEmail] = useState("");
  const [isValidEmali, setIsValidEmail] = useState(null);

  const handleEmailInput = e => {
    const email = e.target.value;
    setEmail(email);
    setIsValidEmail(true);
  };

  const handleLogInProcess = e => {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    const isValidEmail = regEmail.test(email);
    setIsValidEmail(isValidEmail);

    if (isValidEmail) {
      fetch(CHECK_API, {
        method: "POST",
        body: JSON.stringify({
          email: email
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "SIGN_IN") {
            return (
              saveUserInformation(email),
              handleSignInEmailWindow(),
              handleSignInPwWindow()
            );
          }
          if (res.message === "SIGN_UP") {
            return (
              saveUserInformation(email),
              handleSignInEmailWindow(),
              handleSignUpWindow()
            );
          }
        });
    }
  };

  return (
    <ModalContent onClick={maintainModalWindow} isSignInEmail={isSignInEmail}>
      <Header>
        <div>WINTED</div>
        <button className="fas fa-times" onClick={handleModalWindow}></button>
      </Header>
      <Section>
        <h1>
          직장인을 위한<br></br>커리어 플랫폼, 윈티드!
        </h1>
        <h4>
          커리어 성장과 행복을 위한 여정<br></br>지금 윈티드에서 시작하세요.
        </h4>
      </Section>
      <Form>
        <label htmlFor="email">이메일</label>
        <div>
          <Input
            type="email"
            name="emailChk"
            placeholder="이메일을 입력해 주세요."
            value={email}
            isValid={isValidEmali}
            onChange={handleEmailInput}
          />
          <P isValid={isValidEmali}>올바른 이메일 형식을 입력해주세요.</P>
        </div>
        <ul>
          <li>
            <Button color="#3366FF" onClick={handleLogInProcess}>
              <i className="far fa-envelope" />
              이메일로 시작하기
            </Button>
            <span>or</span>
          </li>
          <li>
            <KakaoButton handleModalWindow={handleModalWindow} />
          </li>
          <li>
            <Button>
              <i className="fab fa-apple" /> Apple로 시작하기
            </Button>
          </li>
          <li>
            <Button>
              <i className="fab fa-google" /> Google로 시작하기
            </Button>
          </li>
        </ul>
      </Form>
      <Footer>
        걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다. 회원가입 시{" "}
        <span>개인정보 처리방침</span>과 <span>이용약관</span>을 확인하였으며,
        동의합니다.
      </Footer>
    </ModalContent>
  );
};

export default withRouter(SignInEmail);

const ModalContent = styled.div`
  display: ${props => (props.isSignInEmail ? "block" : "none")};
  position: relative;
  top: 50%;
  left: 50%;
  width: 400px;
  max-height: calc(100vh - 150px);
  background-color: white;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  div {
    position: relative;
    font-size: 17px;
    font-weight: 900;
  }
  button {
    position: absolute;
    right: 0;
    width: 54px;
    height: 54px;
    background-color: transparent;
    color: #999999;
    font-size: 26px;
    font-weight: 300;
    text-align: center;
  }
`;

const Section = styled.section`
  h1 {
    margin-top: 20px;
    font-size: 26px;
    line-height: 1.54;
    text-align: center;
  }
  h4 {
    margin: 16px 0 32px;
    color: #666;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
  }
`;

const Form = styled.div`
  padding: 0 20px;
  label {
    display: block;
    width: 100%;
    padding-bottom: 14px;
    color: #767676;
    font-size: 14px;
  }
  span {
    display: block;
    width: 100%;
    margin: 3px 0;
    color: #969696;
    font-size: 16px;
    text-align: center;
  }
  div {
    margin-bottom: 13px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${props =>
      props.isValid || props.isValid === null ? "#e7e8e8" : "#fe415c"};
  border-radius: 6px;
  font-size: 15px;
  text-indent: 10px;
  &::placeholder {
    color: #adadad;
    font-size: 15px;
    font-weight: 400;
    text-indent: 10px;
  }
  &:focus {
    border: 1px solid ${theme.mainBlue};
    border-radius: 6px;
    outline: none;
  }
`;

const P = styled.p`
  display: ${props =>
    props.isValid || props.isValid === null ? "none" : "block"};
  padding: 2px 0;
  margin-top: 6px;
  color: #fe415c;
  font-size: 12px;
  text-indent: 18px;
`;

const Button = styled.button`
  width: 100%;
  height: 54px;
  margin: 5px 0;
  background: ${props => props.color || "white"};
  border: 1px solid #e7e8e8;
  border-radius: 30px;
  color: ${props => (props.color ? "white" : "#767676")};
  font-weight: 700;
  text-align: center;
  .fa-facebook {
    color: ${theme.mainBlue};
  }
  .fa-apple {
    color: #000000;
  }
  .fa-google {
    color: #d54c3f;
  }
`;

const Footer = styled.footer`
  width: 370px;
  margin: 20px auto 40px;
  color: #999;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  span {
    display: inline;
    color: ${theme.mainBlue};
    font-size: 12px;
    text-decoration: underline;
  }
`;
