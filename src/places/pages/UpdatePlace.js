import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import useForm from '../../shared/hooks/form-hook';
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
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const filteredPlace = DUMMY_PLACES.find(p => p.id === placeId);

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: true
    },
    description: {
      value: '',
      isValid: true
    }
  }, true)

  useEffect(() => {
    setFormData({
      title: {
        value: filteredPlace.title,
        isValid: true
      },
      description: {
        value: filteredPlace.description,
        isValid: true
      }
    }, true)
    setIsLoading(false)
  }, [setFormData, filteredPlace]);

  const placesUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState)
  }

  if (!filteredPlace) {
    return (
      <div className='center'>
        <h2>Could not find place!</h2>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='center'>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <form className='place-form' onSubmit={placesUpdateSubmitHandler} >
      <Input 
        id='title'
        element='input'
        label='Title'
        type='text'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Plese enter a valid title'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
      />
      <Input 
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Plese enter a valid description (min. 5 characters).'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  )
};

export default UpdatePlace;