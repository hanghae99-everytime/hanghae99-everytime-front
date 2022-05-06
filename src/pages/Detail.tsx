import React, { useState } from "react";
import styled from 'styled-components';

//elements
import Input from '../elements/Input'


interface DetailProps {}

const Detail: React.FC<DetailProps> = () => {
  const [input, setInput] = useState("")
  return (
    <Wrap>
      <p>디테일</p>
      <Input type="text" placeholder="댓글을 작성해주세요" _onChange={() => {}}  />
    </Wrap>
  )
};

const Wrap = styled.div`
  background-color: #1e5280;
  height: 50vh;
`

export default Detail;
