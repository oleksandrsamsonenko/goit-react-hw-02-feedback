import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <button className={css.btn} onClick={() => handleFeedback('good')}>
            Good
          </button>
        </li>
        <li>
          <button className={css.btn} onClick={() => handleFeedback('neutral')}>
            Neutral
          </button>
        </li>
        <li>
          <button className={css.btn} onClick={() => handleFeedback('bad')}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.elementType.isRequired, //але це не точно
};
