// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import styled from "styled-components";
import Select from "./index";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {},
  render: ({ ...args }) => (
    <Container>
      <Select
        options={[
          { value: "123", label: "원투쓰리" },
          { value: "456", label: "포파이브씩쓰" },
        ]}
      />
    </Container>
  ),
};

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 200vh;
  align-items: center;
  background: black;
`;
