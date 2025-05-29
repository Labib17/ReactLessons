import React from 'react';
import users from '../../data/users.json';
import { Link } from 'react-router-dom';

const Users = () => {
    return (
        <div className='Main'>
            <h2>Users</h2>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>
                        <Link to={`/users/${u.id}`}>{u.name}</Link>
                     </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;