//import css from './Section.module.css';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';

class Section extends Component {
  
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
      <div>
      <h1 /*className={css.title}*/>title</h1>

      <FeedbackOptions
      options={['good', 'neutral', 'bad']} 
      onLeaveFeedback={this.resultOnLeaveFeedback}
      />
    
    <h1 /*className={css.title}*/>Statistics</h1>   
{this.countTotalFeedback() ? 
      <Statistics good={ good }
               neutral={ neutral }
               bad={ bad }
               total={ this.countTotalFeedback() }
               positiveFeedback={ this.countPositiveFeedbackPercentage() }
      />:
      <Notification message='There is no feedback'/>}
      </div>
    );
  }
}

export default Section;
