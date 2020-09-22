import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { userId } = useParams();

    const [user, setUsers] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div className="card">

            
            <p>user detail:{userId}</p>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            
        </div>
    );
};

export default UserDetail;