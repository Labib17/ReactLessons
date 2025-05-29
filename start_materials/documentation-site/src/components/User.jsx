import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import users from '../data/users.json';

const User = () => {
  const { id } = useParams();
  const user = users.find(u => u.id === id);
  if(!user) return <Navigate to='not-found' />

  return (
    <div className='Main user-page'>
      <h3>
        <Link to='/users'>Back</Link>
      </h3>
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
      <h3>I am {user.age}</h3>
      <img src={user.img} alt="avatar" />
    </div>
  );
};

export default User;
