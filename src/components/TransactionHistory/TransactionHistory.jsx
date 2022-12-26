import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export default function TransactionHistory ({items}){
    return(
        <table className={css.transactionHistory}>
          <thead className= {css.tableHead}>
            <tr className={css.tableHeadRow}>
              <th className= {css.tableHeadCell}>Type</th>
              <th className= {css.tableHeadCell}>Amount</th>
              <th className= {css.tableHeadCell}>Currency</th>
            </tr>
          </thead>

          <tbody className={css.tableBody}>
            {items.map(({id, type, amount, currency})=>
            <tr className= {css.tableRow} key = {id}>
            <td className = {css.tableData}>{type}</td>
            <td className = {css.tableData}>{amount}</td>
            <td className = {css.tableData}>{currency}</td>
            </tr>
            )}
          </tbody>
        </table>
    )
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
}