import React, { ButtonHTMLAttributes } from "react";
import styled, { CSSObject, css } from "styled-components";

type ColorType = "red" | "blue" | "yellow";
type SizeType = 32 | 24;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children?: React.ReactNode;
  color?: ColorType;
  style?: CSSObject;
  disabled?: boolean;
  size?: SizeType;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  color = "blue",
  children = "Button",
  size = 32,
  ...props
}) => {
  return (
    <StyledButton {...props} color={color} block={props.block} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;

const getStyleByColor = (color: ColorType) => {
  switch (color) {
    case "red": {
      return css`
        background: red;
        color: white;
        border: 1px solid red;
        &:focus {
          opacity: 0.5;
        }
        &:hover {
          opacity: 0.5;
        }
        &:active {
          opacity: 0.5;
        }
      `;
    }
    case "blue": {
      return css`
        background: blue;
        color: white;
        border: 1px solid blue;
        &:focus {
          opacity: 0.5;
        }
        &:hover {
          opacity: 0.5;
        }
        &:active {
          opacity: 0.5;
        }
      `;
    }
    case "yellow": {
      return css`
        background: yellow;
        color: black;
        border: 1px solid yellow;
        &:focus {
          opacity: 0.5;
        }
        &:hover {
          opacity: 0.5;
        }
        &:active {
          opacity: 0.5;
        }
      `;
    }
  }
};

const getStyleBySize = (size: SizeType) => {
  switch (size) {
    case 32: {
      return css`
        height: 32px;
        padding: 7px 14px;
        border-radius: 5px;
        font-size: 12px;
        line-height: 18px;
      `;
    }
    case 24: {
      return css`
        height: 24px;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 10px;
        line-height: 14px;
      `;
    }
  }
};

const StyledButton = styled("button").withConfig({
  shouldForwardProp: (prop) => !["block"].includes(prop),
})<Pick<ButtonProps, "disabled" | "color" | "block" | "size">>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ color }) => {
    if (color) {
      return getStyleByColor(color);
    }
  }}

  ${({ block }) => {
    if (block) {
      return css`
        display: block;
        width: 100%;
      `;
    }
  }}

${({ size }) => size && getStyleBySize(size)}
`;
