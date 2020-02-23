import React from "react";
import Post from "./Post/Post";
import Styles from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Добавить новость</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
};

export default MyPosts;