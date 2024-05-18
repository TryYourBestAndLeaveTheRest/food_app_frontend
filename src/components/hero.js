import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
//   Icon,
  Image,
  //   IconProps,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={800}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Feeding and Nutrition{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Eat healthy food, Make Order from reliable source around your area,
          Remember that Feeding is as important as your health
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
          >
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Login
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Image src="/food.jpg" />
          {/* <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          /> */}
        </Flex>
      </Stack>
    </Container>
  );
}
