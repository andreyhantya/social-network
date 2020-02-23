import React from "react";
import Styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    const { content } = Styles;
    return (
        <div className={content}>
            <div>Profile
                Ava + description
            </div>
            <MyPosts />
        </div>
    )
};

export default Profile;