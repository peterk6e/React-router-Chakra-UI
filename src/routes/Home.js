import { Box } from '@chakra-ui/react';
import { Hero } from '../components/Hero';
import { Avatars } from '../components/Avatars';

export const Home = () => {
  return (
    <Box>
      <Hero />
      <Avatars />
    </Box>
  );
};
