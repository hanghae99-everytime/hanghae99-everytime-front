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
  type: 'text',
  _onChange: () => { },
  width: '',
  margin: '',
  padding: '',
  height:'',
};

const InputBox = styled.input`
  background-color: #fff;
  opacity: 5;
  border: none;
  ${(props) => (props.width ? `width:${props.width};` : '')};
  padding: 10px;
  border-radius: 5px;
`

export default Input;
