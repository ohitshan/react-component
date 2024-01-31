// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import styled from "styled-components";
import Table from "./index";

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {},
  render: ({ ...args }) => (
    <Container>
      <Table
        dataSource={[
          { name: "han", age: "1212132132112313" },
          { age: "han", name: "12" },
        ]}
        columns={[
          { title: "Name", dataIndex: "name", key: "name" },
          { title: "Age", dataIndex: "age", key: "age" },
        ]}
      />
    </Container>
  ),
};

const Container = styled.div`
  width: 100%;
`;
