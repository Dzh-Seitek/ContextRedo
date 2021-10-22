import React, { useEffect, useState } from "react";
import { getUsersRequest } from '../../api/';
import UserItem from './UserItem';

const Users = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const {data} = await getUsersRequest();
        setUsers(data);
    }
    useEffect(() => {
        getUsers();
    }, [])
    
    return(
        <div className="users-container">
            {users.map((user) => (
                <UserItem key={user.id} {...user}/>
            ))}
        </div>
    )
}

export default Users;