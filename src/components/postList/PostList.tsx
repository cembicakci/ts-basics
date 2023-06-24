import React from "react";
import PostCard from "../postCard/PostCard";

const PostList = () => {
    return (
        <div className="postList">
            <PostCard title="post title" body="post desc" />
        </div>
    );
};

export default PostList;