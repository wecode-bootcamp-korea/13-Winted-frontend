import React from "react";
import styled from "styled-components";

const KakaoButton = () => {
  const handleSocialLogiIn = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log(JSON.stringify(authObj));
      },
      fail: function (error) {
        alert(JSON.stringify(error));
      }
    });
  };

  return <Button onClick={handleSocialLogiIn}></Button>;
};

export default KakaoButton;

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
