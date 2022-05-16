import React from "react";
import styled from 'styled-components';
import Ba from '../assets/hero1.png'

interface BackProps {
  children : any
}

const Background: React.FC<BackProps> = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      <Back>
        {children}
      </Back>
    </React.Fragment>
  )
};

Background.defaultProps = {
  children : null
}


const Back = styled.div`
  background: url(${Ba}) no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Background;
