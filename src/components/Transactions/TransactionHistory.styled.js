import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid lightgrey;
  box-shadow: 0px 2px 2px 1px lightgrey;
  border-radius: 4px;
  th:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
  td:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;

export const TransactionHistoryThead = styled.thead`
  text-transform: uppercase;
  color: white;
  background-color: #0ed2d2;
  line-height: 30px;
`;

export const TransactionHistoryTbodyTr = styled.tr`
  &:nth-child(odd) {
    background-color: white;
  }

  &:nth-child(even) {
    background-color: #e5f2ff;
  }
  line-height: 30px;
  text-transform: capitalize;
`;
