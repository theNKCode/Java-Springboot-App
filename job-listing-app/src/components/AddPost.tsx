import React, { useState } from "react";
import { addPost } from "../api/jobApi";
import { Post } from "../types/Post";

const AddPost: React.FC = () => {
  const [formData, setFormData] = useState<Post>({ profile: "", desc: "", exp: 0, techs: [] });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddPost = async () => {
    await addPost(formData);
    alert("Post added successfully!");
    setFormData({ profile: "", desc: "", exp: 0, techs: [] });
  };

  return (
    <div>
      <h2>Add a Job Post</h2>
      <input name="profile" value={formData.profile} onChange={handleChange} placeholder="Profile" />
      <textarea name="desc" value={formData.desc} onChange={handleChange} placeholder="Description"></textarea>
      <input name="exp" type="number" value={formData.exp} onChange={handleChange} placeholder="Experience" />
      <input
        name="techs"
        value={formData.techs.join(", ")}
        onChange={(e) => setFormData((prevData) => ({ ...prevData, techs: e.target.value.split(", ") }))}
        placeholder="Technologies (comma separated)"
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
