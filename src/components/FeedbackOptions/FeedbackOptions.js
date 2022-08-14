import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul" display="flex" gridGap={4}>
      {options.map(option => {
        return (
          <li key={option}>
            <Btn name={option} onClick={onLeaveFeedback}>
              {option.replace(/^./, option[0].toUpperCase())}
            </Btn>
          </li>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
