import React, { useState } from "react";
import styled from 'styled-components';

//elements
import Input from '../elements/Input';
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Button from "../elements/Button";
import Dives from '../elements/Dives';

interface DetailProps {}

const Detail: React.FC<DetailProps> = () => {
  const [input, setInput] = useState("")
  return (
    <Wrap>
      <Back>
        <Ba>
          <Dives>
          </Dives>
          <div className="main">
          </div>
        </Ba>
      </Back>
    </Wrap>
  )
};

const Wrap = styled.div`
display: flex;
  .main{
    width: 75%;
    height: 95%;
    margin: auto;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
`

export default Detail;
