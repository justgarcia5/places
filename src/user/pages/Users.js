import React from 'react';

import UsersList from '../components/UserLIst'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Justin Garcia',
      image: 'https://www.yosemite.com/wp-content/uploads/2016/04/Glacier-Point-Yosemite.jpg',
      places: 3
    }
  ]
  return (
    <React.Fragment>
      <UsersList items={USERS} />
    </React.Fragment>
  )
}

export default Users;
