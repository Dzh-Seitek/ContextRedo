import React, { useContext, useState } from "react";
import '../../styles/PostItem.css';
import Preloader from '../Preloader/Preloader';
import { PostContext } from "../Context/context.js";

const PostItem = ({userId, title, body}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {getPostUser} = useContext(PostContext);
    return(
        <div className="post-item" onClick={async () => {
                if (user) return;
                setIsLoading(true);
                await getPostUser(userId, setUser);
                setIsLoading(false);
            }}>
            <h3 className="post-item__title"><span>Post Title: </span>{title}</h3>
            <p className="post-item__body"><span>Post Info: </span>{body}</p>
            {isLoading ? <Preloader/> :
            user &&
                <div className="post-item__user-info">
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.phone}</span>
            </div>}
        </div>
    )
}

export default PostItem;