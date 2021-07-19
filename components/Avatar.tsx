import { styled } from '../stitches.config';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: 99999,
  variants: {
    size: {
      md: {
        width: 80,
        height: 80,
      },
      lg: {
        width: 100,
        height: 100,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

// eslint-disable-next-line react/display-name
const Avatar = React.forwardRef<
  React.ElementRef<typeof StyledAvatar>,
  React.ComponentProps<typeof StyledAvatar>
>(({ size = 'md', ...props }, forwardedRef) => {
  return (
    <StyledAvatar {...props} ref={forwardedRef} size={size}>
      <StyledImage
        src={`https://res.cloudinary.com/dcuclvhyb/image/upload/c_scale,f_auto,fl_progressive,w_${
          size === 'lg' ? 200 : 160
        }/v1526775414/matall.in/img/about/1363306686_04d7bb3035.jpg`}
      />
    </StyledAvatar>
  );
});

export default Avatar;
