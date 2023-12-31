import { Blocks } from 'react-loader-spinner';
import { Loader } from './loader.styled';

export const Spinner = () => {
  return (
    <Loader>
      <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
    </Loader>
  );
};