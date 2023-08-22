import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import {
  ImageGalleryItemCard,
  ImageGalleryItemCardImg,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModal: false,
  };

  handlerSwitchModal = () => {
    this.setState(({ isModal }) => ({ isModal: !isModal }));
  };
  render() {
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;
    return (
      <ImageGalleryItemCard onClick={this.handlerSwitchModal}>
        <ImageGalleryItemCardImg src={webformatURL} alt={tags} />
        {this.state.isModal && (
          <Modal
            src={largeImageURL}
            alt={tags}
            onClose={this.handlerSwitchModal}
          />
        )}
      </ImageGalleryItemCard>
    );
  }
}
