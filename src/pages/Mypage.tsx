import React, { useState, ChangeEvent } from "react";
import styled from 'styled-components';

//elements
import Input from '../elements/Input';
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Button from "../elements/Button";
import Dives from '../elements/Dives';
import Comments from "../components/Comments";

interface MypageProps {}

const Mypage: React.FC<MypageProps> = () => {
  return(
    <Wrap>
      <Back>
        <Ba>
          <Dives>
          </Dives>
          <div className="main">
            <div className="wrap">
              <div className="title">마이페이지</div>
            </div>
          </div>
        </Ba>
      </Back>
    </Wrap>
  )
};

const Wrap = styled.div`
  .main{
    width: 80%;
    height: 90%;
    margin: auto;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 24px;
    .wrap{
      margin: auto;
      width: 80%;
      .title{
        margin: auto;
        font-weight: 700;
        font-size: 1.5rem;
        width: 14%;
        margin-bottom: 30px;
      }
    }
  }
`

export default Mypage;
