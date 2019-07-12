import React from 'react';
import useResources from './useResources';

const UserList = () => {
    const users = useResources('users'); // endpoint that we want to fetch
    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
};

export default UserList;