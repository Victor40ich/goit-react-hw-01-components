import PropTypes from 'prop-types';
import TransactionItem from './Transactions';
import s from './TransactionHistory.module.css';
function Transactions({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.tHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id} className={s.item}>
          <TransactionItem
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tbody>
      ))}
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default Transactions;
