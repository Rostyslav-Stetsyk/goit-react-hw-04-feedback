import { Button, ListButtons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ListButtons>
      {options.length &&
        options.map(option => (
          <li key={option}>
            <Button option={option} onClick={onClick}>
              {option[0].toUpperCase() + option.slice(1)}
            </Button>
          </li>
        ))}
    </ListButtons>
  );
};
