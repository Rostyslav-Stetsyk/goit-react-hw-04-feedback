import { Component } from 'react';
import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = e => {
    this.setState(prevState => ({
      [e.target.textContent.toLowerCase()]:
        prevState[e.target.textContent.toLowerCase()] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, cur) => acc + cur);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / (this.countTotalFeedback() || 1)) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <FeedbackWidget
          good={good}
          neutral={neutral}
          bad={bad}
          options={Object.keys(this.state)}
          onClick={this.handlerClick}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}
