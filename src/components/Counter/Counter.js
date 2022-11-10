import { FeedbackOptions } from 'components/Counter/FeedbackOptions';
import React, { Component } from 'react';
//import Controls from './Control';
import './Counter.css';
import Statistics from './Statistics';

class Counter extends Component {
  
  static propTypes = {
    //
  };

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
      <div className="Counter">
      <FeedbackOptions 
      options={['good', 'neutral', 'bad']} 
      onLeaveFeedback={this.resultOnLeaveFeedback}
      >
      </FeedbackOptions>

    <h1 className="Statistics" >Statistics</h1>      
      <Statistics good={ good }
               neutral={ neutral }
               bad={ bad }
               total={ this.countTotalFeedback() }
               positiveFeedback={ this.countPositiveFeedbackPercentage() }
               />
      </div>
    );
  }
}

export default Counter;

