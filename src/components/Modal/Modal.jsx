import { ModalDiv, ModalOverlay } from './Modal.styled';

export const Modal = ({ src, alt }) => {
  return (
    <ModalOverlay>
      <ModalDiv>
        <img src={src} alt={alt} />
      </ModalDiv>
    </ModalOverlay>
  );
};
