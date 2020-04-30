import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  &.ant-btn {
    color: #fff !important;
    border-radius: 300px;
    height: 50px;
    width: auto;
    padding: 0 3rem;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    border: none;

    &:hover {
      color: #fff;
      cursor: pointer;
    }

    @media (max-width: 386px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

const colors = {
  blue: {
    background: "linear-gradient(90deg, #009AFF 0%, #7BCBFF 100%)",
    boxShadow: "0px 12px 90px #009AFF"
  },
  purple: {
    background: "linear-gradient(90deg, #9013FE 0%, #BD73FF 100%)",
    boxShadow: "0px 12px 90px #9013FE"
  }
};

export default ({ text, color, action }) => (
  <StyledButton onClick={action} style={colors[color]}>
    {text}
  </StyledButton>
);
