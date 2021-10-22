import React from "react";
import {withRouter} from 'react-router-dom';
import '../../styles/UserItem.css';

const UserItem = (props) => {
    return(
        <div className="users-item" onClick={() => props.history.push(`/users/${props.id}`)}>
            <span>{props.name}</span>
            <span>{props.username}</span>
            <span>{props.email}</span>
            <span>{props.phone}</span>
            <span>{props.website}</span>
        </div>
    )
}

export default withRouter(UserItem);