import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { SIGNUP_API } from "../../../config";
import styled from "styled-components";
import theme from "../../../Styles/theme";

const SignUp = ({ maintainModalWindow, userEmail, history }) => {
  const [chkBox, setChkBox] = useState([false, false]);
  const [allChkBox, setAllChkBox] = useState(false);
  const [btnSubmit, setBtnSubmit] = useState("disabled");

  const handleAllChk = () => {
    allChkBox ? setChkBox([false, false]) : setChkBox([true, true]);
  };

  const handleEachChkBox = num => {
    const chkBoxStatus = [...chkBox];
    chkBoxStatus[num] = !chkBoxStatus[num];
    setChkBox(chkBoxStatus);
  };

  useEffect(() => {
    const check = chkBox.every(chk => chk);
    setAllChkBox(check);
  }, [chkBox]);

  useEffect(() => {
    const check = chkBox.every(chk => chk);
    check ? setBtnSubmit(false) : setBtnSubmit("disabled");
  }, [chkBox]);

  const [isValidUser, setIsValidUser] = useState({
    nameChk: true,
    phoneNumberChk: true,
    pwChk: true,
    pwReChk: true
  });

  const handleSignUpProcess = e => {
    e.preventDefault();
    const name = e.target.nameChk.value;
    const phoneNumber = e.target.phoneNumberChk.value;
    const password01 = e.target.pwChk.value;
    const password02 = e.target.pwReChk.value;
    const isValidName = name.length > 0;
    const regPhone = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})?[0-9]{3,4}?[0-9]{4}$/;
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6}/;
    const isValidPhone = regPhone.test(phoneNumber);
    const isValidPw01 = regPassword.test(password01);
    const isValidPw02 =
      regPassword.test(password01) & (password01 === password02);

    setIsValidUser({
      ...isValidUser,
      nameChk: isValidName,
      phoneNumberChk: isValidPhone,
      pwChk: isValidPw01,
      pwReChk: isValidPw02
    });

    if (Object.values(isValidUser).every(chk => chk)) {
      fetch(SIGNUP_API, {
        method: "POST",
        body: JSON.stringify({
          email: userEmail,
          name: name,
          phone: phoneNumber,
          password: password01
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "SUCCESS") {
            alert("회원가입이 완료되었습니다.");
            history.push("/");
          }
        });
    }
  };

  const handleAlertStyle = e => {
    const alertName = e.target.name;
    setIsValidUser({ ...isValidUser, [alertName]: true });
  };

  const closeSignUpWindow = e => {
    alert("회원가입을 취소하시겠습니까?");
    history.push("/");
  };

  return (
    <ModalContent onClick={maintainModalWindow}>
      <Header>
        <h2>회원가입</h2>
        <button className="fas fa-times" onClick={closeSignUpWindow}></button>
      </Header>
      <Form
        isValidUser={isValidUser}
        onSubmit={handleSignUpProcess}
        onChange={handleAlertStyle}
      >
        <ul>
          <li>
            <label htmlFor="nameChk">이름</label>
            <Input
              type="text"
              placeholder="이름을 입력해 주세요."
              name="nameChk"
              isValidUser={isValidUser["nameChk"]}
            />
            <P isValidUser={isValidUser["nameChk"]}>이름은 필수정보 입니다.</P>
          </li>
          <li>
            <label htmlFor="phoneNumberChk">휴대폰 번호</label>
            <div>
              <select name="countryCode" id="countryCode">
                <option value="+82">+82 South Korea</option>
              </select>
              <div>
                <Input
                  type="number"
                  placeholder="(예시) 01034567890"
                  name="phoneNumberChk"
                  isValidUser={isValidUser["phoneNumberChk"]}
                />
                <P isValidUser={isValidUser["phoneNumberChk"]}>
                  올바른 연락처 형식이 아닙니다.
                </P>
              </div>
            </div>
          </li>
          <li>
            <label htmlFor="pwChk">비밀번호</label>
            <Input
              type="password"
              placeholder="비밀번호를 6자 이상 입력해 주세요."
              name="pwChk"
              isValidUser={isValidUser["pwChk"]}
            />
            <P isValidUser={isValidUser["pwChk"]}>
              영문자, 숫자, 특수문자만 사용하여 6자 이상 입력해주세요.
            </P>
          </li>
          <li>
            <label htmlFor="pwReChk">비밀번호 확인</label>
            <Input
              type="password"
              placeholder="비밀번호를 다시 한번 입력해 주세요."
              name="pwReChk"
              isValidUser={isValidUser["pwReChk"]}
            />
            <P isValidUser={isValidUser["pwReChk"]}>
              비밀번호가 일치하지 않습니다.
            </P>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                name="allChk"
                onChange={handleAllChk}
                checked={allChkBox}
              />
              <label htmlFor="allChk">전체 동의</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="agreement"
                checked={chkBox[0]}
                onChange={() => handleEachChkBox(0)}
              />
              <label htmlFor="agreement">
                <span>개인정보 수집 및 이용 동의(필수)</span>
                <span>자세히</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="alarm"
                checked={chkBox[1]}
                onChange={() => handleEachChkBox(1)}
              />
              <label htmlFor="alarm">
                <span>이벤트 소식 등 알림 정보 받기</span>
                <span>자세히</span>
              </label>
            </div>
          </li>
          <Button type="submit" disabled={btnSubmit}>
            회원가입하기
          </Button>
        </ul>
      </Form>
    </ModalContent>
  );
};

export default withRouter(SignUp);

const ModalContent = styled.div`
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

  h2 {
    height: 54px;
    padding: 16px 20px;
    font-size: 16px;
    text-align: center;
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

const Form = styled.form`
  padding: 0 20px 20px;

  li:nth-child(2) {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;

      select {
        width: 120px;
        margin-right: 10px;

        &:focus {
          border: 1px solid ${theme.mainBlue};
        }
      }
    }

    input {
      width: 230px;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  li:last-of-type {
    margin-top: 25px;

    div {
      display: flex;
      margin: 5px 0;
      color: #939393;

      > label {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 6px 0 0;
        margin-left: 8px;

        span:last-child {
          font-size: 13px;
        }
      }
    }

    div:first-child {
      margin-bottom: 4px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e1e2e3;
      color: #333;

      label {
        color: #000;
        font-size: 16px;
      }
    }
  }

  li {
    label {
      display: block;
      width: 100%;
      padding: 20px 0 15px;
      color: #767676;
      font-size: 14px;
    }

    select {
      width: 100%;
      height: 50px;
      padding: 0 15px;
      background-color: #fff;
      border: 1px solid #e1e2e3;
      border-radius: 5px;
      font-size: 15px;
      text-indent: 3px;

      &::placeholder {
        color: #adadad;
        font-size: 15px;
        font-weight: 400;
        text-indent: 3px;
      }

      &:focus {
        border: 1px solid ${theme.mainBlu};
        border-radius: 6px;
        outline: none;
      }
    }

    input[type="checkbox"] {
      width: 14px;
      height: 14px;
      margin: 6px 0;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  background-color: #fff;
  border: 1px solid ${props => (props.isValidUser ? "#e1e2e3" : "#fe415c")};
  border-radius: 5px;
  font-size: 15px;
  text-indent: 3px;

  &::placeholder {
    color: #adadad;
    font-size: 15px;
    font-weight: 400;
    text-indent: 3px;
  }

  &:focus {
    border: 1px solid ${props => theme.mainBlue};
    border-radius: 6px;
    outline: none;
  }
`;

const P = styled.p`
  display: ${props => (props.isValidUser ? "none" : "block")};
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
  background-color: ${props =>
    props.disabled === false ? theme.mainBlue : "#f2f4f7"};
  border: none;
  border-radius: 30px;
  color: ${props => (props.disabled === false ? "#fff" : "#cacaca")};
  font-weight: 700;
  text-align: center;

  &:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;
