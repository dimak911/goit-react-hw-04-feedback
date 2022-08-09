import { StatHeading, StatList } from './Statistics.styled';

export const Statistics = ({ currentState: { good, neutral, bad }, total }) => {
  return (
    <>
      <StatHeading>Statistics</StatHeading>
      <StatList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total(good, neutral, bad)}</li>
        <li></li>
      </StatList>
    </>
  );
};
