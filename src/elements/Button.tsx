import React from "react";
import styled from 'styled-components';

interface ButtonProps {
  text: boolean
  children: any
  _onClick: () => void
  margin: string
  width: string
  height: string
  padding: string
  active: boolean
  bg: string
  color: string
  br: string
  top: string
  left: string
}

const Button = ({ text, _onClick, children, margin, width, padding, height, active, bg, color, br, top, left }: ButtonProps) => {
  const styled = { margin, width, height, padding, bg, color, br, top, left }
  return <React.Fragment>
    <Btn
      {...styled}
      onClick={_onClick}
      {...active}
    >
      {children}
    </Btn>
  </React.Fragment>;
};
Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => { },
  margin: '',
  width: '',
  height: '',
  padding: '',
  active: false,
  bg: '',
  color: '',
  br: '',
  top: '',
  left:''
}


const Btn = styled.button`
  background-color: ${(props: any) => (props.bg==='red' ? '#DF0000' : '#fff')};;
  border: 0;
  ${(props: any) => (props.br ? `border-radius:${props.br};` : '')};
  box-shadow: 0 1px 1px 1px rgba(113, 113, 113, 0.3);
  color: ${(props:any)=>(props.color==='black'?'#000000':'#fff')};
  ${(props: any) => (props.width ? `width:${props.width};` : '')};
  ${(props: any) => (props.margin ? `margin:${props.margin};` : '')};
  ${(props: any) => (props.height ? `height:${props.height};` : '')};
  ${(props: any) => (props.padding ? `padding:${props.padding};` : '')};
  cursor: pointer;
  position: absolute;
  ${(props: any) => (props.top ? `top:${props.top};` : '')};
  ${(props: any) => (props.left ? `left:${props.left};` : '')};
`

export default Button;
