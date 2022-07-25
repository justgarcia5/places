import React from 'react';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Bilding',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_20490/20220217065504_ERdIf/jpg',
    address: '20 W 34th St., New York, NY 10001',
    location: {
      lat: '40.7484405,-73.9878531',
      lng: '-73.9878531'
    }
  },
  {
    id: 'p2',
    title: 'Empire State Bilding',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_20490/20220217065504_ERdIf/jpg',
    address: '20 W 34th St., New York, NY 10001',
    location: {
      lat: '40.7484405,-73.9878531',
      lng: '-73.9878531'
    }
  }
]

const UserPlaces = () => {

  return (
    <PlaceList item={DUMMY_PLACES} />
  )
}

export default UserPlaces;
