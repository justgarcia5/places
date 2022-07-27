import React from "react";
import { useParams } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import './PlaceForm.css';

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
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const filteredPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!filteredPlace) {
    return (
      <div className='center'>
        <h2>Could not find place!</h2>
      </div>
    )
  }

  return (
    <form className='place-form'>
      <Input 
        id='title'
        element='input'
        label='Title'
        type='text'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Plese enter a valid title'
        onInput={() => {}}
        value={filteredPlace.title}
        valid={true}
      />
      <Input 
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Plese enter a valid description (min. 5 characters).'
        value={filteredPlace.description}
        valid={true}
        onInput={() => { }}
      />
      <Button type='submit' disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  )
};

export default UpdatePlace;