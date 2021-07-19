import { styled, CSS, StitchesVariants } from '../stitches.config';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import React from 'react';

const DEFAULT_TAG = 'p';

export const StyledText = styled(DEFAULT_TAG, {
  margin: '0',
  fontWeight: 400,
  display: 'block',
  variants: {
    size: {
      '1': { fontSize: '$1', lineHeight: '1rem' },
      '2': { fontSize: '$2', lineHeight: '1.25rem' },
      '3': { fontSize: '$3', lineHeight: '1.5rem' },
      '4': { fontSize: '$4', lineHeight: '1.75rem' },
      '5': { fontSize: '$5', lineHeight: '1.75rem' },
      '6': { fontSize: '$6', lineHeight: '2rem' },
      '7': { fontSize: '$7', lineHeight: '2.25rem' },
      '8': { fontSize: '$8', lineHeight: '2.5rem' },
      '9': { fontSize: '$9', lineHeight: 1 },
    },
    variant: {
      gray: {
        color: '$slate11',
      },
      contrast: {
        color: '$hiContrast',
      },
    },
  },
  defaultVariants: {
    size: '3',
    variant: 'contrast',
  },
});

type TextCSSProp = { css?: CSS };
type TextVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type TextOwnProps = TextCSSProp & TextVariants & { size?: any };

type TextComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  TextOwnProps
>;

// eslint-disable-next-line react/display-name
const TextComponent = React.forwardRef((props, forwardedRef) => {
  return <StyledText {...props} ref={forwardedRef} />;
}) as TextComponent;

export default TextComponent;
