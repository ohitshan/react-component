import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import styled, { CSSObject, css } from "styled-components";
interface BooleanProps {
  error?: boolean;
  success?: boolean;
}
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix">,
    BooleanProps {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
}

const Input: React.FunctionComponent<InputProps> = ({
  prefix,
  suffix,
  addonAfter,
  addonBefore,
  error,
  success,
  ...props
}) => {
  return (
    <Container prefix={prefix} suffix={suffix} error={error}>
      {addonBefore && addonBefore}
      {prefix && <span>{prefix}</span>}
      <StyledInput
        prefix={prefix}
        suffix={suffix}
        error={error}
        success={success}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        {...props}
      />
      {suffix && <span>{suffix}</span>}
      {addonAfter && addonAfter}
    </Container>
  );
};

export default Input;

const Container = styled("span").withConfig({
  shouldForwardProp: (prop) => !["error"].includes(prop),
})<Pick<InputProps, "prefix" | "suffix" | "error">>`
  display: flex;
  height: 100%;
  ${({ prefix, suffix, error }) => {
    if (prefix || suffix) {
      return css`
        border: ${() => (error ? "1px solid red" : "1px solid gray")};
        padding: 4px 12px;
        border-radius: 4px;
      `;
    }
  }}
`;

const StyledInput = styled("input").withConfig({
  shouldForwardProp: (prop) => !["error"].includes(prop),
})<
  Pick<
    InputProps,
    | "prefix"
    | "suffix"
    | "error"
    | "success"
    | "addonAfter"
    | "addonBefore"
    | "disabled"
  >
>`
  border-radius: 4px;
  border: 1px solid gray;
  outline: none;

  ${({ addonAfter, addonBefore }) => {
    if (addonAfter) {
      return css`
        border-radius: 4px 0px 0px 4px;
      `;
    } else if (addonBefore) {
      return css`
        border-radius: 0px 4px 4px 0px;
      `;
    }
  }}

  ${({ prefix, suffix, error }) => {
    if (prefix || suffix) {
      return css`
        padding: 0;
        border: none;
      `;
    } else {
      return css`
        padding: 4px 12px;
        border: ${() => (error ? "1px solid red" : "1px solid gray")};
      `;
    }
  }}

&:focus,
  :active {
    border: 1px solid purple;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background: #f3f4f5;
      border: 1px solid gray;
      cursor: not-allowed;
    `}
`;
