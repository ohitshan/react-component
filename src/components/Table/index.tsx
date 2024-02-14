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
        {dataSource.map((data, i) => (
          <StyledTr key={i.toString()}>
            {columns.map((column) => (
              <StyledTd key={column.key}>{data[column.dataIndex]}</StyledTd>
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
  border-bottom: 1px solid gray;
`;

const StyledTh = styled.th`
  text-align: start;
  padding: 6px 12px;
`;

const StyledTd = styled.td`
  padding: 6px 12px;
`;
