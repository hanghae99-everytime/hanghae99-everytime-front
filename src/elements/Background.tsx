import React from "react";
import styled from 'styled-components';
import Ba from '../assets/hero1.png'

interface BackgroundProps {
  children : any
}

const Background: React.FC<BackgroundProps> = (props) => {
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
  background-color: #ffffff3f;
  border-radius: 20px;
  height: 90%;
  width: 90%;
  display: flex;
`

export default Background;
