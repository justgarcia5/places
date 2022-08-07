import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import './PlaceForm.css';
import useForm from '../../shared/hooks/form-hook';

const NewPlaces = () => {
  const [isCreated, setIsCreated] = useState(false);
  const [formState, inputHandler] = useForm({
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      },
      image: {
        value: '',
        isValid: false
      },
      creator: {
        value: 'u1',
        isValid: true
      },

    },
    false
  );

  const placesSubmitHandler = event => {
    event.preventDefault();

    const place = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      image: formState.inputs.image.value,
      address: formState.inputs.address.value,
      creator: formState.inputs.creator.value
    };

    fetch('http://localhost:5000/api/places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(place)
    })
    .then(res => {
      res.json()
      setIsCreated(true)
    })
    .catch(error => console.log(error))
  }

  return (
    <React.Fragment>
      {isCreated && <Navigate to="/" />}
      <form className='place-form' onSubmit={placesSubmitHandler}>
        <Input
          id='title'
          type='text'
          label='Title'
          element='input'
          validators={[VALIDATOR_REQUIRE()]}
          error={'Please enter a valid title.'}
          onInput={inputHandler}
        />
        <Input
          id='description'
          label='Description'
          element='textarea'
          validators={[VALIDATOR_MINLENGTH(5)]}
          error={'Please enter a valid description (at least 5 characters).'}
          onInput={inputHandler}
        />
        <Input
          id='image'
          label='Image URL'
          element='input'
          validators={[VALIDATOR_REQUIRE()]}
          error={'Please enter a valid image url.'}
          onInput={inputHandler}
        />
        <Input
          id='address'
          label='Address'
          element='input'
          validators={[VALIDATOR_REQUIRE()]}
          error={'Please enter a valid address.'}
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!formState.isValid}>ADD PLACE</Button>
      </form>
    </React.Fragment>
  )
}

export default NewPlaces;
