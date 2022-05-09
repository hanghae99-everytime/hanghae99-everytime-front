import React from "react";
import styled from 'styled-components';
import Ba from '../assets/hero1.png'

interface BackgroundProps {}

const Background: React.FC<BackgroundProps> = () => {
  return (
    <React.Fragment>
      <Back>
        <div></div>
      </Back>
    </React.Fragment>
  )
};


const Back = styled.div`
  background: url(${Ba}) no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  margin: auto;
  z-index: -10;
  div{
    background-color: white;
    opacity: 0.5;
    border-radius: 5px;
    margin: auto;
    height: 90%;
    width: 90%;
    z-index: -9;
  }
`

export default Background;
