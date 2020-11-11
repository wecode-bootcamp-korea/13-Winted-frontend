import React from "react";
import styled from "styled-components";

const DetailBox = ({ name, subName, startDate, endDate, isTypeSimple }) => {
  return (
    <Detail>
      {!isTypeSimple && (
        <Date isSdateValid={startDate} isEdateValid={endDate}>
          <span>{`${startDate || "YYYY . MM"}`}</span> -
          <span>{`${endDate || "YYYY . MM"}`}</span>
        </Date>
      )}
      <Data>
        <div>
          <span>{name}</span>
          <button>x</button>
        </div>

        <span>{subName}</span>
      </Data>
    </Detail>
  );
};

const Detail = styled.div`
  border-top: 1px solid #eeeeee;
  padding: 30px;
  display: flex;
`;

const Date = styled.div`
  width: 25%;
  display: flex;
  span {
    &:first-child {
      color: ${props => (props.isSdateValid ? "black" : "gray")};
    }
    &:last-child {
      color: ${props => (props.isEdateValid ? "black" : "gray")};
    }
  }
`;

const Data = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    }

    button {
      color: gray;
    }
  }
`;

export default DetailBox;
