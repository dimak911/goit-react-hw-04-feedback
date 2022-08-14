import PropTypes from 'prop-types';
import { StatList } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
  const totalReviews = countTotalFeedback([good, neutral, bad]);
  const positivePercentageCount = countPositiveFeedbackPercentage(
    good,
    totalReviews
  );
  function countTotalFeedback(arrayOfNumbers) {
    return arrayOfNumbers.reduce((acc, num) => acc + num, 0);
  }

  function countPositiveFeedbackPercentage(positiveValue, totalReviews) {
    return Math.round((positiveValue / totalReviews) * 100);
  }

  return (
    <>
      <StatList>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{totalReviews}</span>
        </li>
        <li>
          Positive Feedback:{' '}
          <span>{positivePercentageCount ? positivePercentageCount : 0}%</span>
        </li>
      </StatList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
