import React from 'react';
import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryThead,
  TransactionHistoryTbodyTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <TransactionHistoryTable>
        <TransactionHistoryThead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TransactionHistoryThead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionHistoryTbodyTr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TransactionHistoryTbodyTr>
          ))}
        </tbody>
      </TransactionHistoryTable>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
