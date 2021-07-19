import { styled } from '../stitches.config';

const Container = styled('div', {
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  variants: {
    size: {
      '2': {
        maxWidth: '800px',
      },
      '4': {
        maxWidth: 'none',
      },
    },
  },
  defaultVariants: {
    size: '4',
  },
});

export default Container;
