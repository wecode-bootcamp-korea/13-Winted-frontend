import React, { useState } from "react";
import SignInEmail from "./components/SignIn/SignInEmail";
import SignInPw from "./components/SignIn/SignInPw";
import SignUp from "./components/SignUp/SignUp";
import styled from "styled-components";

const Login = () => {
  const [isModal, setisModal] = useState(false);
  const [isSignInEmail, setIsSignInEmail] = useState(true);
  const [isSignInPw, setIsSignInPw] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleModalWindow = () => {
    setisModal(!isModal);
  };

  const maintainModalWindow = e => {
    e.stopPropagation();
  };

  const handleSignInEmailWindow = () => {
    setIsSignInEmail(!isSignInEmail);
  };

  const handleSignInPwWindow = () => {
    setIsSignInPw(!isSignInPw);
  };

  const handleSignUpWindow = () => {
    setIsSignUp(!isSignUp);
  };

  const saveUserInformation = email => {
    setUserEmail(email);
  };

  return (
    <>
      <LogInButton onClick={handleModalWindow}>회원가입/로그인</LogInButton>
      <Modal isModal={isModal}>
        <ModalOverlay onClick={handleModalWindow}>
          {isModal & isSignInEmail & !isSignUp ? (
            <SignInEmail
              handleModalWindow={handleModalWindow}
              maintainModalWindow={maintainModalWindow}
              handleSignInEmailWindow={handleSignInEmailWindow}
              handleSignInPwWindow={handleSignInPwWindow}
              handleSignUpWindow={handleSignUpWindow}
              saveUserInformation={saveUserInformation}
            />
          ) : isModal & !isSignInEmail & isSignInPw ? (
            <SignInPw
              handleModalWindow={handleModalWindow}
              maintainModalWindow={maintainModalWindow}
              handleSignInEmailWindow={handleSignInEmailWindow}
              saveUserInformation={saveUserInformation}
              userEmail={userEmail}
            />
          ) : isModal & isSignUp & !isSignInPw ? (
            <SignUp
              handleModalWindow={handleModalWindow}
              maintainModalWindow={maintainModalWindow}
              userEmail={userEmail}
            />
          ) : null}
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default Login;

const LogInButton = styled.button`
  display: block;
  padding: 0 15px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.isModal ? "block" : "none")};
  width: 100%;
  height: 100%;
`;

const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;
