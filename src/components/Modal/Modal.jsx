import { Component } from 'react';
import { ModalDiv, ModalOverlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKey);
  }

  handlerKey = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <ModalOverlay>
        <ModalDiv>
          <img src={src} alt={alt} />
        </ModalDiv>
      </ModalOverlay>
    );
  }
}
