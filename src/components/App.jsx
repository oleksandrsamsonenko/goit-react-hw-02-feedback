import Feedback from './Feedback/Feedback';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const { good, neutral, bad } = state;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
