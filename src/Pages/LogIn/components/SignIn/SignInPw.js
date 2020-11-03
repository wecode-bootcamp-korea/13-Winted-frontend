import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { SIGNIN_API } from "../../../../config";
import styled from "styled-components";
import theme from "../../../../Styles/theme";

const SignInPw = ({
  handleModalWindow,
  maintainModalWindow,
  handleSignInEmailWindow,
  handleSignInPwWindow,
  saveUserInformation,
  isSignInPw,
  userEmail,
  history
}) => {
  const [password, setPasword] = useState("");
  const [isValidPw, setIsValidPw] = useState(true);

  const handleInputPassword = e => {
    const password = e.target.value;
    const alertName = e.target.name;
    setPasword(password);
    setIsValidPw({ [alertName]: true });
  };

  const handleLogInProcess = e => {
    fetch(SIGNIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "SUCCESS") {
          return (
            localStorage.setItem("token", res.authorization),
            localStorage.setItem("user_data", JSON.stringify(res.user_data)),
            alert("로그인이 완료되었습니다."),
            handleModalWindow(),
            handleSignInEmailWindow(),
            handleSignInPwWindow(),
            window.location.reload()
          );
        }
        if (res.message === "INVALID EMAIL OR PASSWORD")
          return setIsValidPw(false), saveUserInformation("");
      });
  };

  return (
    <ModalContent onClick={maintainModalWindow} isSignInPw={isSignInPw}>
      <Header>
        <div>비밀번호 입력</div>
        <button className="fas fa-times" onClick={handleModalWindow}></button>
      </Header>
      <Form>
        <label htmlFor="email">비밀번호</label>
        <div>
          <Input
            type="password"
            name="pwChk"
            placeholder="비밀번호"
            isValid={isValidPw}
            onChange={handleInputPassword}
          />
          <P isValid={isValidPw}>비밀번호가 일치하지 않습니다.</P>
          <Button onClick={handleLogInProcess}>로그인</Button>
          <p>비밀번호 초기화/변경</p>
        </div>
      </Form>
    </ModalContent>
  );
};

export default withRouter(SignInPw);

const ModalContent = styled.div`
  display: ${props => (props.isSignInPw ? "block" : "none")};
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
  margin-bottom: 20px;
  div {
    position: relative;
    font-size: 15px;
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
  p:last-child {
    width: 100%;
    color: ${theme.deepBlue};
    margin: 20px 0 40px;
    font-size: 14px;
    font-weight: 900;
    text-align: center;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${props => (props.isValid ? "#e7e8e8" : "#fe415c")};
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
  display: ${props => (props.isValid ? "none" : "block")};
  padding: 2px 0;
  margin-top: 6px;
  color: #fe415c;
  font-size: 12px;
  text-indent: 18px;
`;

const Button = styled.button`
  width: 100%;
  height: 54px;
  margin: 30px 0 0;
  background: ${theme.deepBlue};
  border: 1px solid #e7e8e8;
  border-radius: 30px;
  color: #fff;
  font-weight: 700;
  text-align: center;
`;
