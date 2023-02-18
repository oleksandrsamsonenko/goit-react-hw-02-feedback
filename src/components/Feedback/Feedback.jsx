import { Component } from 'react';
import css from './Feedback.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Notification } from './Notification/Notification';
import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback() {
    const array = Object.values(this.state);
    return array.reduce((total, item) => (total += item));
  }

  countPositiveFeedbackPercentage() {
    const array = Object.values(this.state);
    const total = array.reduce((total, item) => (total += item));
    return total === 0
      ? '0'
      : `${Math.round((this.state.good / total) * 100)}%`;
  }
  render() {
    const total = this.countTotalFeedback();
    const rating = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions handleFeedback={this.handleFeedback} />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              rating={rating}
            />
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
