import React, { useState } from "react";
import styled from 'styled-components';

//elements
import Input from '../elements/Input';
import Ba from '../elements/Background';

interface DetailProps {}

const Detail: React.FC<DetailProps> = () => {
  const [input, setInput] = useState("")
  return (
    <>
      <Ba/>
      <Input
        type="text"
        placeholder="댓글 작성"
        _onChange={() => { }}
        width="400px"
        />
    </>
  )
};

export default Detail;
