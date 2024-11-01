import { Post } from "../types/Post";

const API_BASE_URL = "http://localhost:4000"; // Update with actual API URL

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  return await response.json();
};

export const addPost = async (post: Post): Promise<Post> => {
  const response = await fetch(`${API_BASE_URL}/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return await response.json();
};

export const searchPosts = async (text: string): Promise<Post[]> => {
  const response = await fetch(`${API_BASE_URL}/posts/${text}`);
  return await response.json();
};
