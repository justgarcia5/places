import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
  const userId = useParams().userId;
  const [places, setPlaces] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/api/places/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        setPlaces(data)
      })
  }, [userId])

  return (
    <React.Fragment>
      {places && <PlaceList item={places} /> }
    </React.Fragment>
  )
}

export default UserPlaces;
