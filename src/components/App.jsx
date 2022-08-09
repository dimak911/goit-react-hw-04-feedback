import { Box } from 'components/Box';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ReviewBtn } from './ReviewBtn/ReviewBtn';
import { Statistics } from './Statistics/Statistics';
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

  countTotalFeedback = (a, b, c) => a + b + c;

  countPositiveFeedbackPercentage = () => {
    //
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          height="100vh"
          color="white"
          bg="#2a2a2a"
          pt={4}
        >
          <h1>Please leave feedback</h1>
          <Box display="flex" gridGap={3} p={3} mb={3}>
            <ReviewBtn name="Good" onStatBtnClick={this.changeStat} />
            <ReviewBtn name="Neutral" onStatBtnClick={this.changeStat} />
            <ReviewBtn name="Bad" onStatBtnClick={this.changeStat} />
          </Box>
          <Box>
            <Statistics
              currentState={this.state}
              total={this.countTotalFeedback}
            />
          </Box>
        </Box>
      </>
    );
  }
}
