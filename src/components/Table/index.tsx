import React, { ButtonHTMLAttributes } from "react";
import styled, { CSSObject, css } from "styled-components";

interface TableColumnType {
  title: React.ReactNode;
  dataIndex: string;
  key: string;
}

export interface TableProps {
  columns: Array<TableColumnType>;
  dataSource: Array<any>;
}

const Table: React.FunctionComponent<TableProps> = ({
  columns = [],
  dataSource = [],
}) => {
  return (
    <StyledTable>
      <thead>
        <StyledTr>
          {columns.map((column) => (
            <StyledTh key={column.dataIndex.toString()}>
              {column.title}
            </StyledTh>
          ))}
        </StyledTr>
      </thead>
      <tbody>
        {dataSource.map((data) => (
          <StyledTr>
            {columns.map((column) => (
              <StyledTd>{data[column.dataIndex]}</StyledTd>
            ))}
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const StyledTr = styled.tr`
  border-bottom: 1px solid white;
`;

const StyledTh = styled.th`
  text-align: start;
  padding: 12px 24px;
`;

const StyledTd = styled.td`
  padding: 12px 24px;
`;
