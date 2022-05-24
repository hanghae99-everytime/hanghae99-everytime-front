import React from "react";
import styled from 'styled-components';

interface InputProps {
  placeholder: string
  onChange: (e:any) => void
  type: string
  width: string
  margin: string
  padding: string
  height:string
  value:string
}

const Input = ({ placeholder, onChange, type, margin, width, padding, height,value }: InputProps) => {
  const styled = { width, margin, padding, height }
  return (
    <React.Fragment>
      <InputBox
        {...styled}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
      />
    </React.Fragment>
  )
}

Input.defaultProps = {
  placeholder: '',
  type: '',
  onChange: () => {},
  width: '',
  margin: '',
  padding: '',
  height:'',
  value:''
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
