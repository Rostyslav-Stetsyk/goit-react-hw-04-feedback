import { StatisticsList, StatisticsText } from './Statistics.styled';

export const Statistics = ({ values, options, total, positivePercentage }) => {
  return (
    <StatisticsList>
      {options.map((el, i) => (
        <li>
          <StatisticsText>
            {el[0].toUpperCase() + el.slice(1)}: {values[i]}
          </StatisticsText>
        </li>
      ))}
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
