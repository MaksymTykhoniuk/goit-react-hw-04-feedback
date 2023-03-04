import React from 'react';
import { useState } from 'react';

import { Statistics } from 'components/FeedbackComponents/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackComponents/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/FeedbackComponents/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleBtnClick = event => {
    const value = event.target.value;

    if (value === 'good') {
      setGood(state => state + 1);
    } else if (value === 'neutral') {
      setNeutral(state => state + 1);
    } else if (value === 'bad') {
      setBad(state => state + 1);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return `${Math.ceil((good / total) * 100)}%`;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleBtnClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statisctics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};
