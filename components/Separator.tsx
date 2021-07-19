import { styled } from '../stitches.config';
import * as Separator from '@radix-ui/react-separator';

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: '$slate6',
  height: '1px',
  width: '$7',
});

const SeparatorComponent = () => <StyledSeparator />;

export default SeparatorComponent;
