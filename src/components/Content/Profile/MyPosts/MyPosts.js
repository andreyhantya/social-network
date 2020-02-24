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
            <Post message='Привет, как дела?' likes='14'/>
            <Post message='Крутая авка' likes='26'/>


        </div>
    )
};

export default MyPosts;