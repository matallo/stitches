import { styled } from '../stitches.config';

const Icon = styled('span', {
  '& > svg': {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '24px',
  },
  variants: {
    size: {
      16: {
        '& > svg': {
          height: '16px',
        },
      },
      24: {
        '& > svg': {
          height: '24px',
        },
      },
    },
  },
  defaultVariant: {
    size: 24,
  },
});

export default Icon;
