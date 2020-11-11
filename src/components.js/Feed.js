import React from "react";

import Post from "./Post";
import TweetBox from "./TweetBox";


function Feed({posts, addTweetPost, deleteTweetPost, updateTweetPost}) {


  return (
    
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox addTweetPost={addTweetPost}  />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          id={post._id}
          deleteTweetPost={deleteTweetPost}
          updateTweetPost={updateTweetPost} 
        />
      ))}
       
    </div>
  );
}

export default Feed;