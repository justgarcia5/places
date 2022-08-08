import React from 'react';
import './UserList.css';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card'

const UserList = props => {
  if (props.isLoading) {
    return (
      <div className='center'>
        <h2>Loading...</h2>
      </div>
    )
  }

  if (props.items.length === 0 && !props.isLoading) {
    return (
      <div className='center'>
        <Card className='users-list'>
          <h2>No users found.</h2>
        </Card>
      </div>
    )
  }

  return (
    <ul className='users-list'>
      {props.items.users.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places.length - 1}
        />
      ))}
    </ul>
  )
}

export default UserList;
