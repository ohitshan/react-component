import React, { ButtonHTMLAttributes } from "react";
import styled, { CSSObject, css } from "styled-components";
import { CheckedSquare } from "../../Svgr";

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  unCheckedIcon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  label?: React.ReactNode;
  gap?: number;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  checked = false,
  onChange,
  unCheckedIcon,
  checkedIcon,
  label,
  gap = 12,
}) => {
  return (
    <StyledLabel gap={gap}>
      {unCheckedIcon ? (
        <UnCheckedIconDiv checked={checked}>{unCheckedIcon}</UnCheckedIconDiv>
      ) : (
        <UnCheckedIcon checked={checked} />
      )}
      {checkedIcon ? (
        <CheckedIconDiv checked={checked}>{checkedIcon}</CheckedIconDiv>
      ) : (
        <CheckedIcon checked={checked} />
      )}
      <StyledInput
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.checked);
          }
        }}
      />
      {label}
    </StyledLabel>
  );
};

export default Checkbox;

const StyledInput = styled("input").withConfig({
  shouldForwardProp: (prop) => ![""].includes(prop),
})`
  width: 14px;
  height: 14px;
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledLabel = styled("label").withConfig({
  shouldForwardProp: (prop) => !["gap"].includes(prop),
})<{ gap: number }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${({ gap }) => `${gap}px`};
`;

const UnCheckedIcon = styled(CheckedSquare).withConfig({
  shouldForwardProp: (prop) => !["checked"].includes(prop),
})<{ checked?: boolean }>`
  transition: all 0.3s;
  cursor: pointer;
  stroke: gray;
  fill: white;
  ${({ checked }) => {
    if (checked) {
      return css`
        opacity: 0;
      `;
    } else {
      return css`
        opacity: 1;
      `;
    }
  }}
`;
const CheckedIcon = styled(CheckedSquare).withConfig({
  shouldForwardProp: (prop) => !["checked"].includes(prop),
})<{ checked?: boolean }>`
  transition: all 0.3s;
  position: absolute;
  cursor: pointer;
  fill: blue;
  stroke: white;
  ${({ checked }) => {
    if (!checked) {
      return css`
        opacity: 0;
      `;
    } else {
      return css`
        opacity: 1;
      `;
    }
  }}
`;

const UnCheckedIconDiv = styled("div").withConfig({
  shouldForwardProp: (prop) => !["checked"].includes(prop),
})<{ checked?: boolean }>`
  transition: all 0.3s;
  cursor: pointer;
  ${({ checked }) => {
    if (checked) {
      return css`
        opacity: 0;
      `;
    } else {
      return css`
        opacity: 1;
      `;
    }
  }}
`;
const CheckedIconDiv = styled("div").withConfig({
  shouldForwardProp: (prop) => !["checked"].includes(prop),
})<{ checked?: boolean }>`
  transition: all 0.3s;
  position: absolute;
  cursor: pointer;
  ${({ checked }) => {
    if (!checked) {
      return css`
        opacity: 0;
      `;
    } else {
      return css`
        opacity: 1;
      `;
    }
  }}
`;
