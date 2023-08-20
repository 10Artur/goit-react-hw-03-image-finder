import { ButtonBtn } from './Button.styled';

export const Button = ({ click, children }) => {
  return (
    <ButtonBtn type="button" onClick={click}>
      Load more {children}
    </ButtonBtn>
  );
};
