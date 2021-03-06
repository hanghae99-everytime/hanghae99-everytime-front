import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import axios from "axios";

//elements
import Input from '../elements/Input';
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Button from "../elements/Button";
import Dives from '../elements/Dives';
import Comments from "../components/Comments";

interface WriteProps {}

const Write: React.FC<WriteProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChangeTitle =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value);
  }

  const onChangeContent =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setContent(e.target.value);
  }
  return(
    <Wrap>
    <Back>
      <Ba>
        <Dives>
        </Dives>
        <div className="main">
          <div className="wrap">
            <div className="input">
              <div className="label">글제목</div>
              <Input
              width="100%"
              height="30px"
              type="text"
              onChange={(e)=>(onChangeTitle(e))}
              value={title}
              />
            </div>
            <div className="input">
              <div className="label">작성 내용</div>
              <Input
              width="100%"
              height="178px"
              type="text"
              onChange={(e)=>(onChangeContent(e))}
              value={content}/>
            </div>
            <div>
              <button className="btn">글 작성하기</button>
            </div>
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
    .input{
      margin-bottom: 20px;
      .label{
      font-weight: 600;
      margin-bottom: 10px;
      }
      .explain{
        font-size: 0.9rem;
        margin-top: 5px;
        margin-left: 10px;
      }
    }
    .btn{
      margin: 40px auto 20px auto;
      background-color: #DF0000;
      border: 0;
      border-radius: 5px;
      color: white;
      width: 40%;
      height: 40px;
      padding: 10px;
      box-shadow: 0 1px 1px 1px rgba(113, 113, 113, 0.3);
      cursor: pointer;
      font-weight: 700;
      display: block
    }
  }
`

export default Write;
