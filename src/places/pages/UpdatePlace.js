import React, { useEffect, useState } from "react";
import { useParams, Navigate } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import useForm from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const placeId = useParams().placeId;

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
    fetch(`http://localhost:5000/api/places/${placeId}`)
      .then(res => res.json())
      .then(place => {
        setFormData({
          title: {
            value: place.places.title,
            isValid: true
          },
          description: {
            value: place.places.description,
            isValid: true
          },
          image: {
            value: place.places.image,
            isValid: true
          },
          address: {
            value: place.places.address,
            isValid: true
          }
        }, true)
        setIsLoading(false)
      })
  }, [placeId, setFormData])

  const placesUpdateSubmitHandler = event => {
    event.preventDefault();

    const place = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      image: formState.inputs.image.value,
      address: formState.inputs.address.value,
    };

    fetch(`http://localhost:5000/api/places/${placeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(place)
    })
    .then(res => {
      res.json()
      setIsUpdated(true)
    })
    .catch(error => console.log(error))
  }

  if (!formState) {
    return (
      <div className='center'>
        <Card>
          <h2>Could not find place!</h2>
        </Card>
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
    <React.Fragment>
      {isUpdated && <Navigate to="/" />}
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
        <Input
          id='image'
          element='input'
          label='Image URL'
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Plese enter a valid image url.'
          onInput={inputHandler}
          initialValue={formState.inputs.image.value}
          initialIsValid={formState.inputs.image.isValid}
        />
        <Input
          id='address'
          element='input'
          label='Address'
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Plese enter a valid address.'
          onInput={inputHandler}
          initialValue={formState.inputs.address.value}
          initialIsValid={formState.inputs.address.isValid}
        />
        <Button type='submit' disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    </React.Fragment>
  )
};

export default UpdatePlace;
