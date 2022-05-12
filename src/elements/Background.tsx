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
        <div className="back">{children}</div>
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

  .back{
    background-color: #ffffff3f;
    border-radius: 5px;
    height: 90%;
    width: 90%;
  }
`

export default Background;
