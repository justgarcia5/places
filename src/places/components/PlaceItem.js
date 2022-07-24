import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/UIElements/Avatar';
import Card from '../../shared/UIElements/Card';
import './PlaceItem.css';

const PlaceItem = props => {
  return (
    <li className='place-item'>
      <Card className='place-item__content'>
        <Link to={`/${props.id}/places`}>
          <div className='place-item__image'>
            <Avatar image={props.image}/>
          </div>
          <div className='place-item__info'>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  )
}

export default PlaceItem;
