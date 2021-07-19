import { styled } from '../stitches.config';

const Link = styled('a', {
  textDecoration: 'underline',
  variants: {
    variant: {
      red: {
        color: '$red10',
        textDecorationColor: '$red10',
        '&:hover': {
          color: '$red11',
          textDecorationColor: '$red11',
        },
      },
      gray: {
        color: '$slate9',
        textDecorationColor: '$slate9',
        '&:hover': {
          color: '$slate10',
          textDecorationColor: '$slate10',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'red',
  },
});

export default Link;
