// RestaurantCard.js
import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={restaurant.imageUrl} alt={restaurant.name} />
      <Box p={6}>
        <Flex align="baseline" justify="space-between">
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={restaurant.status === 'Open' ? 'green' : 'red'}
          >
            {restaurant.status}
          </Badge>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="bold">
          {restaurant.name}
        </Text>
        <Text mt={2} color={useColorModeValue('gray.600', 'gray.400')}>
          {restaurant.description}
        </Text>
      </Box>
    </Box>
  );
};

export default RestaurantCard;
