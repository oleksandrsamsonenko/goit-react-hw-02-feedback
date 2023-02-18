import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, rating }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <p>
            Good: <span className={css.count}>{good}</span>
          </p>
        </li>
        <li>
          <p>
            Neutral: <span className={css.count}>{neutral}</span>
          </p>
        </li>
        <li>
          <p>
            Bad: <span className={css.count}>{bad}</span>
          </p>
        </li>
        <li>
          <p>
            Total:
            <span className={css.count}> {total}</span>
          </p>
        </li>
        <li>
          <p>
            Positive feedback: <span className={css.count}>{rating}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
};
