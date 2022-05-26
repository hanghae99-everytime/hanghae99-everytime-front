import React from "react";
import styled from "styled-components";
import Ba from "../assets/hero1.png";

interface BackProps {
  children: any;
}

const Back: React.FC<BackProps> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <BackBox>{children}</BackBox>
    </React.Fragment>
  );
};

Back.defaultProps = {
  children: null,
};

const BackBox = styled.div`
  background: url(${Ba}) no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Back;
