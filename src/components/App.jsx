import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';
import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handlerClick = e => {
    const key = e.target.textContent.toLowerCase();
    setFeedback(prevState => ({ ...prevState, [key]: prevState[key] + 1 }));
  };

  const countTotalFeedback = () =>
    Object.values(feedback).reduce((acc, cur) => acc + cur);

  const countPositiveFeedbackPercentage = () =>
    Math.round((feedback.good / (countTotalFeedback() || 1)) * 100);

  return (
    <>
      <FeedbackWidget
        values={Object.values(feedback)}
        options={Object.keys(feedback)}
        onClick={handlerClick}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </>
  );
};
