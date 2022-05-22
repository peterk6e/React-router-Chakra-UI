import { useState } from 'react';
import { Center, Button, useColorModeValue, Box } from '@chakra-ui/react';

export const Avatars = () => {
  const baseURL = 'https://avatars.dicebear.com/api/avataaars/';
  const [count, setCount] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const playStop = () => {
    if (!isPlaying) {
      const newIntervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 500);
      setIntervalId(newIntervalId);
      setIsPlaying(true);
    } else {
      clearInterval(intervalId);
      setIntervalId(0);
      setIsPlaying(false);
    }
  };

  return (
    <Box>
      <Center>
        <img width="250px" src={baseURL + count + '.svg'} alt="avatar" />
      </Center>
      <Button
        rounded={'full'}
        m={6}
        bg={useColorModeValue('telegram.100', 'telegram.900')}
        onClick={playStop}
      >
        {isPlaying ? 'Stop' : 'Play'}
      </Button>
    </Box>
  );
};
