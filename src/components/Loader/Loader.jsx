import { Triangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <>
      <LoaderContainer>
        <Triangle width="200" color="#3f51b5" />
      </LoaderContainer>
    </>
  );
};
