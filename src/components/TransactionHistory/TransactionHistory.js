import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'
export default function TransactionHistory({ items }){
  console.log(items)
  return (
      <table className="transaction-history">
  <thead>
    <tr className ={s.tableTitle}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className ={s.tableBord}> 
        {
          items.map(({ id, amount, type, currency }) =>
          (
            <tr key={id}>
      <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
    </tr>
               )
          )}
  </tbody>
</table>
)
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency : PropTypes.string,
  }))
}
  
