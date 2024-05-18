// src/components/RecipeCard.js
import React from 'react';
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';

const RecipeCard = ({ recipe }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={recipe.imageUrl} alt={recipe.name} />
      <Box p={6}>
        <Text fontSize="xl" fontWeight="bold">
          {recipe.name}
        </Text>
        <Text mt={2} color={useColorModeValue('gray.600', 'gray.400')}>
          {recipe.description}
        </Text>
      </Box>
    </Box>
  );
};

export default RecipeCard;
