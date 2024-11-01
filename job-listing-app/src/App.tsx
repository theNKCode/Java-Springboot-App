import React from "react";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";

function App() {
  return (
    <div className="App">
      <h1>Job Listing App</h1>
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;
