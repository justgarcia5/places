import React, { useState, useContext } from "react";

import Card from '../../shared/components/UIElements/Card';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import useForm from '../../shared/hooks/form-hook';
import { AuthContext } from "../../shared/context/auth-context";
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [showPassord, setShowPassword] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      },
    },
    false
  );

  const submitHandler = async e => {
    e.preventDefault();

    if (isLoginMode) {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value
        })
      });

      const responseData = response.json();
      console.log(responseData);
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          })
        });

        const responseData = response.json()
        console.log(responseData);
      }  catch (err) {
        console.log(err);
      };
    }

    auth.login();
  }

  const toggleHidePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid);
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }

    setIsLoginMode(prevMode => !prevMode);
  }

  return (
    <Card className='authentication'>
      <form  onSubmit={submitHandler}>
        <h2>Login Required</h2>
        <hr />
        {!isLoginMode &&
          <Input
            id='name'
            label='Your Name'
            element='input'
            type='text'
            validators={[VALIDATOR_REQUIRE()]}
            error='Please enter a name'
            onInput={inputHandler}
          />
        }
        <Input
          id='email'
          label='E-mail'
          element='input'
          type='text'
          validators={[VALIDATOR_EMAIL()]}
          error='Please enter a valid email'
          onInput={inputHandler}
        />
        <Input
          id='password'
          label='Password'
          element='input'
          type={showPassord ? 'text' : 'password'}
          autoComplete='current-password'
          validators={[VALIDATOR_MINLENGTH(5)]}
          error='Please enter a valid password'
          onInput={inputHandler}
        />
        <Button type='button' inverse onClick={toggleHidePassword}>
          {showPassord ? 'HIDE PASSWORD' : 'SHOW PASSWORD '}
        </Button>
        <Button type='submit' disabled={!formState.isValid}>LOG IN</Button>
        <Button type='button' onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </form>
    </Card>
  )
};

export default Auth;
