import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_20490/20220217065504_ERdIf/jpg',
    address: '20 W 34th St., New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_20490/20220217065504_ERdIf/jpg',
    address: '20 W 34th St., New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },

    creator: 'u2'
  }
]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return (
    <PlaceList item={loadedPlaces} />
  )
}

export default UserPlaces;
