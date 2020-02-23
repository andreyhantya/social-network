import React from "react";
import Styles from "./Post.module.css"

const Post = () => {
  return (
      <div >
          <img
              src="data:image/jpeg;base64,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"
              alt="Avatar"/>
                Hello
          <div>
              <span>Like</span>
          </div>
      </div>
  )
};

export default Post;