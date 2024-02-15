// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "./index";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    checkedIcon: <div>checked</div>,
    unCheckedIcon: <div>unChecked</div>,
  },
  render: ({ ...args }) => {
    return (
      <Container>
        <Checkbox {...args} />
      </Container>
    );
  },
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;
