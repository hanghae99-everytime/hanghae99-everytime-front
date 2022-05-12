import React, { useState } from "react";
import styled from 'styled-components';

//elements
import Input from '../elements/Input';
import Ba from '../elements/Background';
import Button from "../elements/Button";
import Dives from '../elements/Dives';

interface DetailProps {}

const Detail: React.FC<DetailProps> = () => {
  const [input, setInput] = useState("")
  return (
    <Wrap>
      <Ba>
        <Dives>
          <div className="title">항해99에 타</div>
          <Button
            width="145px"
            height="26px"
            br="40px"
            top='91px'
            left="21px"
          >로그인</Button>
          <Button
            width="145px"
            height="26px"
            br="40px"
            top='124px'
            left="21px"
          >글작성하기</Button>
          
        </Dives>
        <Input
          type="text"
          placeholder="댓글 작성"
          _onChange={() => { }}
          width="400px"
        />
      </Ba>
    </Wrap>
  )
};

const Wrap = styled.div`
  .title{
    font-size: 24px;
    font-weight: 700;
    color: #FB0000;
    position: absolute;
    top: 43px;
    left: 32px;
  }
`

export default Detail;
