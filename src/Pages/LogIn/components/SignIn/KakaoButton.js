import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { KAKAO_API } from "../../../../config";

const KakaoInit = () => {
  window.Kakao.init("5c0711e6eb10b3d538f1711ea62fbfb6");
};

const KakaoButton = ({ handleModalWindow, history }) => {
  useEffect(() => {
    KakaoInit();
  }, []);

  const handleSocialLogiIn = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        fetch(KAKAO_API, {
          method: "POST",
          headers: { Authorization: authObj.access_token }
        })
          .then(res => res.json())
          .then(res => {
            if (res.message === "SUCCESS") {
              localStorage.setItem("token", res.authorization);
              localStorage.setItem("user_data", JSON.stringify(res.user_data));
              alert("로그인이 완료되었습니다");
              handleModalWindow();
              history.push("/joblist");
            }
          });
      },
      fail: function (error) {
        alert(JSON.stringify(error));
      }
    });
  };

  return <Button onClick={handleSocialLogiIn}></Button>;
};

export default withRouter(KakaoButton);

const Button = styled.button`
  width: 362px;
  height: 54px;
  margin: 5px 0;
  background-image: url("./images/kakao_login_large_wide.png");
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid #e7e8e8;
  border-radius: 30px;
  font-weight: 700;
`;
