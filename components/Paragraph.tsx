import { styled } from '../stitches.config';
import { Text } from '.';

const Paragraph = styled(Text, {
  mb: '$5',
  '&:last-child': {
    mb: 0,
  },
});

export default Paragraph;
