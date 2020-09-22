import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import { Container, Row, Col} from 'react-bootstrap';



const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])
    return (
    <div>
        <div className="center">
        <h1>users: {users.length}</h1>
        </div>
        
        <div className="all justify-content-center">
            {
              users.map(users => <Users users={users}></Users>)  
            }  
        </div>
        </div>
        
        
    );
};

export default Home;