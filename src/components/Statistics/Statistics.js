import { StatHeading, StatList } from './Statistics.styled';

export const Statistics = ({ currentState: { good, neutral, bad }, total }) => {
  const totalReviews = total(good, neutral, bad);
  const positivePercentage = Math.round((good / totalReviews) * 100);
  return (
    <>
      <StatHeading>Statistics</StatHeading>
      <StatList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalReviews}</li>
        <li>
          Positive Feedback: {positivePercentage ? positivePercentage : 0}%
        </li>
      </StatList>
    </>
  );
};
