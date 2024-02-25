import style from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr className={style.tr}>
          <th className={style.th}>Type</th>
          <th className={style.th}>Amount</th>
          <th className={style.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={style.tr}>
            <td className={style.td}>{item.type}</td>
            <td className={style.td}>{item.amount}</td>
            <td className={style.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
