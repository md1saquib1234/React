import { useRef } from "react";

const CreatePost = () => {
  
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  return (
    <form className="create-post">

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userId}
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitle}
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea rows={4}
          type="text"
          className="form-control"
          id="body"
          ref={postBody}
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactions}
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tags}
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
