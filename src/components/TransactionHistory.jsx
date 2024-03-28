import React from 'react';
import styles from './TransactionHistory.module.css';
export default function TransactionHistory ({ items }) {
    return (
      <table  className={styles.table}>
        <thead  className={styles.thead}>
          <tr>
            <th className={styles.colums}>Type</th>
            <th className={styles.colums}>Amount</th>
            <th className={styles.colums}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr  className={styles.head} key={id}>
              <td className={styles.rows}>{type}</td>
              <td  className={styles.rows}>{amount}</td>
              <td  className={styles.rows}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  