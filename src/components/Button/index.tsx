import React, { ButtonHTMLAttributes } from 'react'
import styled, { CSSObject, css } from 'styled-components'

type ColorType = "red" | "blue" | "yellow"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  label?: string;
  color?: ColorType;
  style?: CSSObject;
  disabled?: boolean;

}

const Button: React.FunctionComponent<ButtonProps> = ({ color = 'blue', label = 'Button', ...props }) => {
  return (
    <StyledButton
    {...props}
    
    color={color}
    
    >
      {label}
    </StyledButton>
  )
}

export default Button

const getStyleByColor = (
  color: ColorType
) => {
  
  switch (color) {
    case 'red': {
      return css`
        background: red;
        color:white;
        border:1px solid red;
      `
    }
    case 'blue': {
      return css`
      background: blue;
      color:white;
      border: 1px solid blue;
      `
    }
    case 'yellow':{
      return css`
        background: yellow;
        color:white;
        border: 1px solid yellow;
      `
    }
  }
}

const StyledButton = styled.button<Pick<ButtonProps, 'disabled' | 'color'>>`
  display:flex; 
  padding:12px 20px;
  border-radius: 12px;
  cursor: pointer;
  
  &:disabled{
    cursor:not-allowed;
    opacity: 0.5;
  };

  ${({color}) =>{
    if(color){
      return getStyleByColor(color)}
    }
  }

`