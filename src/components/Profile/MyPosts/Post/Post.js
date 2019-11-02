import React from "react";
import s from "./Post.module.css";
const Post = props => {
  return (
    <div className={s.item}>
      <img
        src="http://www.zbrushcentral.com/attachment.php?attachmentid=172086"
        alt="ava"
      />
      {props.message}
      <div>
        <span>like: </span>
        {props.likeCount}
      </div>
    </div>
  );
};

export default Post;
