
import {
  Box,
  SimpleGrid,
  Heading,
  Select,
  Button,
  Stack,
} from '@chakra-ui/react';

import React, { useState, useEffect } from 'react';

import RestaurantCard from './RestaurantCard';

const restaurants = [
  {
    id: 1,
    name: 'The Good Food Place',
    description: 'Delicious meals with a cozy ambiance.',
    imageUrl: 'https://source.unsplash.com/random/800x600?restaurant1',
    status: 'Open',
    location: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 2,
    name: 'The Vegan Delight',
    description: 'Healthy and fresh vegan options.',
    imageUrl: 'https://source.unsplash.com/random/800x600?restaurant2',
    status: 'Closed',
    location: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 3,
    name: 'Steak House',
    description: 'Juicy steaks and premium quality meats.',
    imageUrl: 'https://source.unsplash.com/random/800x600?restaurant3',
    status: 'Open',
    location: { lat: 41.8781, lng: -87.6298 },
  },
  // Add more restaurants as needed
];
// RestaurantList.js

const getDistance = (location1, location2) => {
  const { lat: lat1, lng: lng1 } = location1;
  const { lat: lat2, lng: lng2 } = location2;
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const RestaurantList = () => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('none');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const userLocation = { lat: 37.7749, lng: -122.4194 }; // Example user location

  useEffect(() => {
    let updatedRestaurants = [...restaurants];

    if (filter === 'open') {
      updatedRestaurants = updatedRestaurants.filter(
        (restaurant) => restaurant.status === 'Open'
      );
    }

    if (sort === 'distance') {
      updatedRestaurants.sort((a, b) => {
        const distanceA = getDistance(userLocation, a.location);
        const distanceB = getDistance(userLocation, b.location);
        return distanceA - distanceB;
      });
    }

    setFilteredRestaurants(updatedRestaurants);
  }, [filter, sort]);

  return (
    <Box p={6}>
      <Heading mb={6} textAlign="center">
        Available Restaurants
      </Heading>
      <Stack direction="row" spacing={4} mb={6} justify="center">
        <Select
          placeholder="Filter by status"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="all">All</option>
          <option value="open">Open Only</option>
        </Select>
        <Select
          placeholder="Sort by"
          onChange={(e) => setSort(e.target.value)}
          value={sort}
        >
          <option value="none">None</option>
          <option value="distance">Distance</option>
        </Select>
      </Stack>
      <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={6}>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RestaurantList;
