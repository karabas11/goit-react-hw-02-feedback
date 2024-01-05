import { Component } from "react";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (e) =>
  { 
    const option = e.target.name
    this.setState((prevState) => ({[option]: prevState[option] +1} ))
  }

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);

    if (totalFeedback === 0) {
      return 0;
    }

    return Math.round((good / totalFeedback) * 100);
  };

  render(){
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state);
    
    return(
      <div>
          <Section title="Please leave feedback">
            < FeedbackOptions 
                options={Object.keys(this.state)} 
                onLeaveFeedback={this.handleClick} />
          </Section>
          <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>         
    
      </div>

    )
  }
}

export default App;