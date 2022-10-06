import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className="statistics">
      <p className="stats">Good: {good}</p>
      <p className="stats">Neutral: {neutral}</p>
      <p className="stats">Bad: {bad}</p>
      <p className="stats">Total: {total}</p>
      <p className="stats">Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
