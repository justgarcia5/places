import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import './PlaceForm.css';
import useForm from '../../shared/hooks/form-hook';

const NewPlaces = () => {
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
      }
    },
    false
  );

  const placesSubmitHandler = event => {
    event.preventDefault();
    console.log(formState)
  }

  return (
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
        id='address'
        label='Address'
        element='input'
        validators={[VALIDATOR_REQUIRE()]}
        error={'Please enter a valid address.'}
        onInput={inputHandler}
      />
      <Button type='submit' disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  )
}

export default NewPlaces;
