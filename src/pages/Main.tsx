import React from "react";
import Background from "../elements/Background";
import styled from 'styled-components';

interface MainProps {}

const Main: React.FC<MainProps> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Background>
          <h1>메인</h1>
        </Background>
      </Container>
    </React.Fragment>
  ) 
};

const Container = styled.div`

`

export default Main;
