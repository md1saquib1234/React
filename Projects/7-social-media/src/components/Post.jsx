import { AiFillDelete } from "react-icons/ai";
import React from "react";
const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <AiFillDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="alert alert-success" role="alert">
          {post.reactions}
        </div>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;
