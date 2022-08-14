import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeStat = evt => {
    this.setState(prevState => {
      const statKey = evt.target.name.toLowerCase();
      return { [statKey]: prevState[statKey] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isNoFeedback = Object.values(this.state).every(x => x === 0);

    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.changeStat}
          />
        </Section>

        <Section title="Statistics">
          {isNoFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics good={good} neutral={neutral} bad={bad} />
          )}
        </Section>
      </>
    );
  }
}
