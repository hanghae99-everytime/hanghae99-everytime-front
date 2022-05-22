import React, { useState, ChangeEvent } from "react";
import styled from 'styled-components';

//elements
import Input from '../elements/Input';
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Button from "../elements/Button";
import Dives from '../elements/Dives';
import Comments from "../components/Comments";

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  const [email, setEmail] = useState("")
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  console.log('이메일',email);
  return(
    <Wrap>
      <Back>
        <Ba>
          <Dives>
          </Dives>
          <div className="main">
            <div className="wrap">
              <div className="title">회원가입</div>
              <div className="input">
                <div className="label">이메일</div>
                <Input
                width="100%"
                height="30px"
                type="text"
                _onChange={()=>(onChangeEmail)}/>
              </div>
              <div className="input">
                <div className="label">비밀번호</div>
                <Input
                width="100%"
                height="30px"
                type="text"/>
              </div>
              <div className="input">
                <div className="label">비밀번호 확인</div>
                <Input
                width="100%"
                height="30px"
                type="text"/>
              </div>
              <div className="input">
                <div className="label">승인 사진</div>
                <Input
                width="100%"
                height="30px"
                type="file"/>
                <div className="explain">항해 99 슬랙 캡쳐 사진</div>
              </div>
              <div className="btn">
                <Button
                bg="red"
                br="5px"
                color="white"
                width="20%"
                height="40px"
                padding="10px"
                >회원가입</Button>
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
      margin-top: 25px;
    }
  }
`
export default Signup;