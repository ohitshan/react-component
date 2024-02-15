import React, { useState } from "react";
import styled, { CSSObject, css } from "styled-components";

interface Option {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface RadioProps {
  options: Array<Option>;
  value?: string;
  radioType?: "center" | "border";
  radioColor?: string;
  gap?: number;
}

const Radio: React.FunctionComponent<RadioProps> = ({
  options = [
    { label: "12", value: "12" },
    { label: "345", value: "34" },
    { label: "345", value: "345", disabled: true },
  ],
  value,
  radioType = "center",
  radioColor = "red",
  gap = 12,
}) => {
  const [radioValue, setRadioValue] = useState(value || options?.[0]?.value);
  return (
    <Container>
      {options.map((option) => (
        <StyledLabel key={option.value} disabled={!!option?.disabled} gap={gap}>
          <StyledInput
            disabled={!!option?.disabled}
            type="radio"
            value={option.value}
            onChange={(e) => {
              setRadioValue(option.value);
            }}
            checked={radioValue === option.value}
            radioType={radioType}
            radioColor={radioColor}
          />
          {option.label}
        </StyledLabel>
      ))}
    </Container>
  );
};

export default Radio;

const Container = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledInput = styled("input").withConfig({
  attrs: [{ type: "radio" }],
  shouldForwardProp: (prop) => !["radioType", "radioColor"].includes(prop),
})<Pick<RadioProps, "radioType" | "radioColor">>`
  cursor: pointer;
  appearance: none;
  border: 1px solid gray;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  transition: 0.2s;
  &:checked {
    ${({ radioColor, radioType }) => {
      if (radioType === "border") {
        return css`
          border: 4px solid ${radioColor};
        `;
      } else if (radioType === "center") {
        return css`
          background: ${radioColor};
          border: 2px solid white;
          box-shadow: 0 0 0 2px ${radioColor};
        `;
      }
    }}
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const StyledLabel = styled("label").withConfig({
  shouldForwardProp: (prop) => !["gap", "disabled"].includes(prop),
})<{ gap?: number; disabled: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${({ gap }) => `${gap}px`};
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `};
`;
