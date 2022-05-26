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

//redux
import {actionCreators as userActions} from "../redux/modules/user";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('')
  const [pw, setPw] = useState<string>("")

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };
  console.log(email,pw);

  const Login =(email:any, pw:any)=>{
    axios
   .post('/user/login',{
      email:email,
      pw:pw
    })
    .then((response:any)=>{
      window.alert(response.data.msg)
      dispatch(userActions.logIn(email))
    })
    .catch((err:any)=>{
      window.alert(err.data.msg)
    })
  }

  return(
    <Wrap>
    <Back>
      <Ba>
        <Dives>
        </Dives>
        <div className="main">
          <div className="wrap">
            <div className="title">로그인</div>
            <div className="input">
              <div className="label">이메일</div>
              <Input
              width="100%"
              height="30px"
              type="text"
              onChange={(e)=>(onChangeEmail(e))}
              value={email}
              />
            </div>
            <div className="input">
              <div className="label">비밀번호</div>
              <Input
              width="100%"
              height="30px"
              type="text"
              onChange={(e)=>(onChangePw(e))}
              value={pw}/>
            </div>
            <div>
              <button className="btn" onClick={()=>{Login(email,pw)}}>로그인</button>
            </div>
            <SignupWrap>
            <div>
              아직회원이 아니신가요?
              <a href="/signup">
                회원가입
              </a>
            </div>
          </SignupWrap>
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
//또는 부분 고민중 어케 만들지ㅠ
const LineWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 14px;
  div {
    background-color:rgba(255, 255, 255, 0.5);
    padding: 0px 5px;
    color: #c7c8db;
    z-index: 3;
  }
  .line{
    width: 250px;
    border: 0.7px solid #c7c8db;
    padding: 0px;
    position: absolute;
  }
`;

const SignupWrap = styled.div`
  width: fit-content;
  margin: 40px auto 8px auto;
  div {
    font-size: 0.9rem;
  }
  a {
    padding-left: 21px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export default Login;
