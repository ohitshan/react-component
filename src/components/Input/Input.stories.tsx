// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import styled from "styled-components";
import Input from ".";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {},
  render: ({ ...args }) => (
    <Container>
      <Input prefix={<div>123</div>} />
      <Input addonAfter={<div>123</div>} />
    </Container>
  ),
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
