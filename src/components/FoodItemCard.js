// src/components/FoodItemCard.js
import React from 'react';
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';

const FoodItemCard = ({ foodItem }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={foodItem.imageUrl} alt={foodItem.name} />
      <Box p={6}>
        <Text fontSize="xl" fontWeight="bold">
          {foodItem.name}
        </Text>
        <Text mt={2} color={useColorModeValue('gray.600', 'gray.400')}>
          {foodItem.description}
        </Text>
      </Box>
    </Box>
  );
};

export default FoodItemCard;
