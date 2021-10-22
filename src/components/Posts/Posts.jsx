import React, { useContext } from "react";
import PostItem from "./PostItem";
import '../../styles/Posts.css';
import { PostContext } from "../Context/context.js";

const Posts = () => {
    const {posts} = useContext(PostContext);
    const {getPostUser} = useContext(PostContext);
    const elements = posts.map((post) => <PostItem key={post.id} {...post} getPostUser={getPostUser}/>)
    return(
        <div className="posts-container">
            {elements}
        </div>
    )
}

export default Posts;