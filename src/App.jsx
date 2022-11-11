import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/Section/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Section/Statistics/Statistics';
import Notification from 'components/Section/Notification/Notification';

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  resultOnLeaveFeedback = e => {
    const fieldName = e.target.id;
    console.log(fieldName);
    this.setState(prevState => {
    return {
      [fieldName]: prevState[fieldName] + 1, 
      };
    });   
  };

  countTotalFeedback = () => {
   const { good, neutral, bad } = this.state;
   return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
   const {good} = this.state;
   return this.countTotalFeedback()
    ? Math.round((good / this.countTotalFeedback()) *100)
    : 0; 
    };

  render() {
    const { good, neutral, bad } = this.state; 
    return (
    <div> 
     <Section title="Please leave feedback">
      <FeedbackOptions
                  options={['good', 'neutral', 'bad']} 
                  onLeaveFeedback={this.resultOnLeaveFeedback}
      />
     </Section>

     <Section title="Statistics">
      {this.countTotalFeedback() ? 
      <Statistics good={ good }
                  neutral={ neutral }
                  bad={ bad }
                  total={ this.countTotalFeedback() }
                  positiveFeedback={ this.countPositiveFeedbackPercentage() }
      />:
      <Notification  message='There is no feedback'/>}
     </Section>
    </div>
    );
  }
}
export default App;
