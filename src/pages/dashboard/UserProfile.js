import React, { useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const UserProfileDashboard = () => {
  const [showBalance, setShowBalance] = useState(false);

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <Box
      w={{ base: 'full', md: 'md' }}
      p="6"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      borderRadius="lg"
    >
      <Flex align="center" mb="4">
        <Avatar size="xl" name="John Doe" src="https://bit.ly/broken-link" />
        <Box ml="4">
          <Text fontSize="2xl" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="md" color="gray.500">
            Status: Active
          </Text>
        </Box>
      </Flex>
      <Box mb="4">
        <Text fontSize="lg" fontWeight="bold">
          Balance
        </Text>
        <Flex align="center">
          <Text fontSize="2xl" fontWeight="bold" mr="2">
            {showBalance ? '$1,234.56' : '****'}
          </Text>
          <IconButton
            aria-label={showBalance ? 'Hide balance' : 'Show balance'}
            icon={showBalance ? <FiEyeOff /> : <FiEye />}
            onClick={handleToggleBalance}
            variant="ghost"
          />
        </Flex>
      </Box>
      <Button colorScheme="blue" w="full">
        Check User History
      </Button>
    </Box>
  );
};

export default UserProfileDashboard;
