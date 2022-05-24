import React from "react";
import styled from "styled-components";

//elements
import Back from "../elements/Back";
import Background from "../elements/Background";
import Dives from "../elements/Dives";

interface MainProps {}

const Main: React.FC<MainProps> = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Back>
          <Background>
            <Dives></Dives>
          </Background>
        </Back>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div``;

export default Main;
