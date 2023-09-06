import { StatisticsList, StatisticsText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <StatisticsText>Good: {good}</StatisticsText>
      </li>
      <li>
        <StatisticsText>Neutral: {neutral}</StatisticsText>
      </li>
      <li>
        <StatisticsText>Bad: {bad}</StatisticsText>
      </li>
      <li>
        <StatisticsText>Total: {total()}</StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Positive feeedback: {positivePercentage()} %
        </StatisticsText>
      </li>
    </StatisticsList>
  );
};
