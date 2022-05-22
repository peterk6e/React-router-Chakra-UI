import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export function Hero() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Creating Avatars{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'telegram.500'} maxW={'3xl'}>
        DiceBear is an avatar library for designers and developers. You can choose between 
        simple identicons and lovely designed characters.
        And best of all: We provide a simple and free HTTP API 
        that you can use right away!
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button rounded={'full'} bg={useColorModeValue('telegram.100', 'telegram.900')}>
            Get started
          </Button>
          <Button rounded={'full'} bg={useColorModeValue('telegram.100', 'telegram.900')} px={6}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
