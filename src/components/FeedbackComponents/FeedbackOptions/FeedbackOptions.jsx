import React from 'react';
import PropTypes from 'prop-types';

import { FeedBackBtn, BtnContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnContainer>
      {options.map(option => {
        return (
          <FeedBackBtn
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            value={option}
          >
            {option}
          </FeedBackBtn>
        );
      })}
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
