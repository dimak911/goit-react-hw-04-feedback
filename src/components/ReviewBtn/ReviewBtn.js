import { Btn } from './ReviewBtn.styled';

export const ReviewBtn = ({ name, onStatBtnClick }) => (
  <Btn name={name} onClick={onStatBtnClick}>
    {name}
  </Btn>
);
