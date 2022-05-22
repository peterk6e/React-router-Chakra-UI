import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import {
    Box,
  } from '@chakra-ui/react';

export const About = () => {
  return (
      <Box>
          <Carousel />
          <Testimonials />
      </Box>
  )
}
