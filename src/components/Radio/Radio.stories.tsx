// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import React, { useState } from "react";
import styled from "styled-components";
import Radio from "./index";

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    radioColor: "blue",
    radioType: "border",
  },
  render: ({ ...args }) => {
    return (
      <Container>
        <Radio {...args} />
        <Radio {...args} />
      </Container>
    );
  },
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;
