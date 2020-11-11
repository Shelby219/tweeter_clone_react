import React,{useState, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import twootData from './data/twoot_data'
import Sidebar from "./components.js/Sidebar";
import EditTwoot from "./components.js/EditTwoot.js";
import Feed from "./components.js/Feed";
import './style.css';


const App = () => {
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    setPosts(twootData)
  }, []);

   // Returns a single post based on the id provided
   function getPostFromId(id) {
    return posts.find((p) =>  p._id === parseInt(id))
  }
    // Add a Tweet in Tweets
    function addTweetPost(p) {
      setPosts([...posts, p])
    }
  
    function deleteTweetPost(id) {
      const updatedPosts = posts.filter((p) => p._id !== parseInt(id))
      setPosts(updatedPosts)
      console.log(updatedPosts)
    }

    function updateTweetPost(updatedPost) {
      const otherPosts = posts.filter((p) => p._id !== updatedPost._id)
      setPosts([...otherPosts, updatedPost])
    }

  return (
    <div className="app" >
       <BrowserRouter>
       <Sidebar />
       <Feed posts={posts} deleteTweetPost={deleteTweetPost} addTweetPost={addTweetPost} updateTweetPost={updateTweetPost} />
  
        <Route exact path="/" />
        <Route exact path="/posts/edit/:id" render={(props) => <EditTwoot {...props} updateTweetPost={updateTweetPost} post={getPostFromId(props.match.params.id)}/> }/>
        </BrowserRouter>
        

    </div>
  )
}

export default App
