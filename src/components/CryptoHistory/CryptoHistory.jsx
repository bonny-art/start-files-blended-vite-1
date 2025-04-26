import { formatDate } from '../../helpers/fodmatDate';
import style from './CryptoHistory.module.css';

const CryptoHistory = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((item, idx) => (
          <tr key={item.id} className={style.tr}>
            <td className={style.td}>{idx + 1}</td>
            <td className={style.td}>{item.price}</td>
            <td className={style.td}>{item.amount}</td>
            <td className={style.td}>{formatDate(item.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
