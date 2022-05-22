import React from "react";
import styled from 'styled-components';

interface InputProps {
  placeholder: string
  _onChange: () => void
  type: string
  width: string
  margin: string
  padding: string
  height:string
}

const Input = ({ placeholder, _onChange, type, margin, width, padding, height }: InputProps) => {
  const styled = { width, margin, padding, height }
  return (
    <React.Fragment>
      <InputBox
        {...styled}
        placeholder={placeholder}
        onChange={_onChange}
        type={type}
      />
    </React.Fragment>
  )
}

Input.defaultProps = {
  placeholder: '',
  type: '',
  _onChange: () => { },
  width: '',
  margin: '',
  padding: '',
  height:'',
};

const InputBox = styled.input`
  background-color:  rgba(255, 255, 255, 0.5);;
  border: none;
  ${(props:any) => (props.width ? `width:${props.width};` : '')};
  ${(props: any) => (props.height ? `height:${props.height};` : '')};
  padding: 11px;
  border-radius: 5px;
  ::placeholder {
  color: black;
  }
  :focus{
    outline: none;
  }
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default Input;
