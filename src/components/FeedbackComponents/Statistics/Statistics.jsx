import React from 'react';
import PropTypes from 'prop-types';
import {
  SingleFeedback,
  TotalCountFeedback,
  Lable,
  AllFeedback,
} from './Statictics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <AllFeedback>
        <SingleFeedback>
          <Lable>Good</Lable>
          <p>{good}</p>
        </SingleFeedback>
        <SingleFeedback>
          <Lable>Neutral</Lable>
          <p>{neutral}</p>
        </SingleFeedback>
        <SingleFeedback>
          <Lable>Bad</Lable>
          <p>{bad}</p>
        </SingleFeedback>
      </AllFeedback>

      <TotalCountFeedback>
        <Lable>Total: {total}</Lable>
        <Lable>Positive: {positivePercentage}</Lable>
      </TotalCountFeedback>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
