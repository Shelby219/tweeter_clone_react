import React from "react";
import {useGlobalState} from '../config/globalState'


import Post from "./Post";
import TweetBox from "./TweetBox";


function Feed({ updateTweetPost}) {

  const {store, dispatch} = useGlobalState()
  const {posts} = store
  return (
    
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox  />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          id={post._id}
          updateTweetPost={updateTweetPost} 
        />
      ))}
       
    </div>
  );
}

export default Feed;