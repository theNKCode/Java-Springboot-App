import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/jobApi";
import { Post } from "../types/Post";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  return (
    <div>
      <h2>Job Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.profile}>
            <h3>{post.profile}</h3>
            <p>{post.desc}</p>
            <p>Experience: {post.exp} years</p>
            <p>Technologies: {post.techs.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
