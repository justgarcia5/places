import React, { useState, useEffect } from 'react';

import UsersList from '../components/UserLIst';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      {users &&
        <UsersList items={users} isLoading={isLoading} />
      }
    </React.Fragment>
  )
}

export default Users;
