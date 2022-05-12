import React from "react";
import styled from 'styled-components';

interface DivProps {
  children: any
}

const Background: React.FC<DivProps> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Dives>{children}</Dives>
    </React.Fragment>
  )
};

Background.defaultProps = {
  children: null
}


const Dives = styled.div`
  background-color: #ffffff4c;
  border-radius: 5px 0px 0px 5px;
  height: 100%;
  width: 190px;
  position: relative;
`

export default Background;
