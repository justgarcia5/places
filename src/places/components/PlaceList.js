import React from 'react';

import Card from '../../shared/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = props => {
  if (props.item.length === 0) {
    return (
      <div className='center'>
        <Card className='place-list'>
          <h2>No places found.</h2>
          <button>Share place</button>
        </Card>
      </div>
    )
  }
  return (
    <ul className='places-list'>
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  )
}

export default PlaceList;
