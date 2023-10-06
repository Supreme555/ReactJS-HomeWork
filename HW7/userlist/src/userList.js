import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from './actions';

const UserList = () => {
    const users = useSelector((state) => state.users);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersRequest());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                dispatch(fetchUsersSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchUsersFailure(error.message));
            });
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> ({user.username}) - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
