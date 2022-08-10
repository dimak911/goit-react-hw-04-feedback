import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { SectionHeading } from './Section.styled';

export const Section = ({ title, children }) => (
  <Box as="section" p={4}>
    <SectionHeading>{title}</SectionHeading>
    {children}
  </Box>
);

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
