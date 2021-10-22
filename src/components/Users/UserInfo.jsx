import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import { getPostUserRequest } from '../../api';
import Preloader from '../Preloader/Preloader';
import '../../styles/UserItem.css';


const UserInfo = (props) => {
    const [user, setUser] = useState(null);
    const getUser = async () => {
        const {data} = await getPostUserRequest(props.match.params.userId);
        setUser(data);
    }
    useEffect(() => {
        getUser();
    }, [])

    return user ? (
        <div className="user-info">
            <span>{user.name}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <span>{user.phone}</span>
            <span>{user.website}</span>
            <div className="users-item__divider">
                <span>{user.address.city}</span>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.zipcode}</span>
            </div>
            <div className="users-item__divider">
                <span>{user.company.name}</span>
                <span>{user.company.name}</span>
                <span>{user.company.catchPhrase}</span>
                <span>{user.company.bs}</span>
            </div>
        </div>
    ) : (
        <Preloader/>
    );
}

export default withRouter(UserInfo);