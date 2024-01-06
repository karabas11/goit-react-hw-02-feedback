import PropTypes from 'prop-types';
import { FeedbackOptionsButton, FeedbackOptionsItem, FeedbackOptionsStyle } from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedback} ) => (
  <FeedbackOptionsStyle>
    {options.map((option) => (
      <FeedbackOptionsItem key={option}>
       <FeedbackOptionsButton 
        type="button" 
        name={option}
        onClick={ onLeaveFeedback }>{option.toUpperCase()}</FeedbackOptionsButton>
      </FeedbackOptionsItem>
    ))}
  </FeedbackOptionsStyle>
)

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions
