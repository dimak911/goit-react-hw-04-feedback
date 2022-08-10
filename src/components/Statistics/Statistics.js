import PropTypes from 'prop-types';
import { StatList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const totalReviews = total([good, neutral, bad]);
  const positivePercentageCount = positivePercentage(good, totalReviews);

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
  total: PropTypes.elementType.isRequired,
  positivePercentage: PropTypes.elementType.isRequired,
};
