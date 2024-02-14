// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "./index";
import React from "react";
import styled from "styled-components";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: "red",
    block: true,
  },
  render: ({ ...args }) => (
    <Container>
      <Button {...args} block={args.block}></Button>
    </Container>
  ),
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
