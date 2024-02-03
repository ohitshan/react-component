import React, { useEffect, useRef, useState } from "react";
import styled, { CSSObject, css } from "styled-components";
import Input from "../Input";
import { createPortal } from "react-dom";

interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  listHeight?: number;
  optionHeight?: number;
  options: Array<Option>;
  onChange?: (e: string) => void;
  value?: string;
}

const Select: React.FunctionComponent<DropdownProps> = ({
  optionHeight = 250,
  options = [
    { value: "1", label: "1" },
    { value: "2", label: "123" },
    { value: "3", label: "123" },
    { value: "5", label: "123" },
    { value: "4", label: "123" },
    { value: "6", label: "123" },
    { value: "7", label: "123" },
    { value: "8", label: "123" },
    { value: "9", label: "123" },
  ],
  listHeight = 32,
  onChange,
  value,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [direction, setDirection] = useState<"downward" | "upward">("downward");
  const [searchValue, setSearchValue] = useState(value);

  const currentHeight =
    options.length * listHeight + 12 > optionHeight
      ? optionHeight
      : options.length * listHeight + 12;

  useEffect(() => {
    const scrollCallback = () => {
      if (isOpened && containerRef.current) {
        const position = containerRef.current?.getBoundingClientRect();
        if (window.innerHeight < position.y + currentHeight + 24) {
          setDirection("upward");
        } else {
          setDirection("downward");
        }
      }
    };
    document.addEventListener("scroll", scrollCallback);
    return () => document.removeEventListener("scroll", scrollCallback);
  }, [isOpened, containerRef.current, currentHeight]);

  useEffect(() => {
    const handleClose = () => {
      if (isOpened) {
        setIsOpened(false);
      }
    };
    document.addEventListener("click", handleClose);
    return () => document.removeEventListener("click", handleClose);
  }, [isOpened]);

  const handleClickInput = () => {
    setIsOpened(!isOpened);
  };

  const handleClickUl = () => {
    setIsOpened(false);
  };

  const renderOptionList = () => {
    if (containerRef.current) {
      const position = containerRef.current?.getBoundingClientRect();
      const top =
        direction === "downward"
          ? scrollY + position?.top + position?.height
          : scrollY + position?.top - currentHeight;
      return createPortal(
        <StyledUl
          onClick={handleClickUl}
          left={position?.left}
          top={top}
          optionheight={currentHeight}
          width={position.width}
        >
          {options.map((option) => (
            <StyledLi
              key={option.value}
              onClick={() => {
                setSearchValue(option.value);
                if (onChange) {
                  onChange(option.value);
                }
              }}
              listheight={listHeight}
            >
              {option.label}
            </StyledLi>
          ))}
        </StyledUl>,
        document.body
      );
    }
    return null;
  };

  return (
    <Container
      ref={containerRef}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {isOpened && renderOptionList()}
      <Input
        readOnly
        onClick={handleClickInput}
        value={
          options.find((option) => option.value === searchValue)?.label || ""
        }
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{ cursor: "pointer" }}
      />
    </Container>
  );
};

export default Select;

const Container = styled.div`
  position: relative;
  height: 32px;
`;

const StyledUl = styled("ul").withConfig({
  shouldForwardProp: (prop) => !["left", "top", "optionheight"].includes(prop),
})<{
  left: number;
  top: number;
  optionheight: number;
  width: number;
}>`
  box-sizing: border-box;
  margin: 0;
  padding: 6px;
  border-radius: 4px;
  position: absolute;
  max-height: ${({ optionheight }) => `${optionheight}px`};
  inset: ${({ top }) => `${top}px`} auto auto ${({ left }) => `${left}px`};
  width: ${({ width }) => `${width}px`};
  box-shadow: 0px 8px 40px rgba(94, 101, 110, 0.2);
  filter: drop-shadow(0px 4px 32px rgba(94, 101, 110, 0.2));
  border: 1px solid gray;
  background: white;
  overflow: scroll;
`;

const StyledLi = styled("li").withConfig({
  shouldForwardProp: (prop) => !["listheight"].includes(prop),
})<{ listheight: number }>`
  display: flex;
  align-items: center;
  list-style: none;
  height: ${({ listheight }) => `${listheight}px`};
  border-radius: 4px;
  &:hover {
    background: red;
    cursor: pointer;
  }
`;
