import { Box } from 'components/Box';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul" display="flex" gridGap={4}>
      {options.map((option, idx) => {
        const optionKey = Object.keys(option)[0];

        return (
          <li key={idx}>
            <Btn name={optionKey} onClick={onLeaveFeedback}>
              {optionKey.replace(/^./, optionKey[0].toUpperCase())}
            </Btn>
          </li>
        );
      })}
    </Box>
  );
};
