import { Avatar, Button } from "@material-ui/core";
import React,{useState, useEffect} from 'react'
import {useGlobalState} from '../config/globalState'
import {withRouter} from 'react-router-dom'

function Post({history, post}) {

  const {store, dispatch} = useGlobalState()
  const {posts} = store


  function updateTweetPost(updatedPost) {
    const otherPosts = posts.filter((p) => p._id !== updatedPost._id)
    //setPosts([...otherPosts, updatedPost])
  }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const sendTweet = (e) => {
      e.preventDefault();
      const updatedPost = {
          _id: post._id,
          username: post.username,
          displayName: post.displayName,
          avatar: post.avatar,
          verified: post.verified,
          text: formState.content,
          image: post.image,
      }
      updateTweetPost(updatedPost)
      history.push(`/`)
      //console.log(updatedPost)
    };

    // Set initial form values to what is in the current post
    const initialFormState = {
        _id: "",
        username: "",
        displayName: "",
        avatar: "",
        verified: "",
        text: "",
        image: "",
    } 

    const [formState,setFormState] = useState(initialFormState)

    useEffect(() => {
        // Set the formState to the fields in the post after mount and when post changes
        post && setFormState({
            username: post.username,
            displayName: post.displayName,
            avatar: post.avatar,
            verified: post.verified,
            text: formState.content,
            image: post.image
        })
    },[post])

    return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62" />
          <input
            value={formState.content} 
            onChange={handleChange}
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          value={formState.image} 
          onChange={handleChange}
          type="text"
          className="tweetBox__imageInput"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__button">
          Update Tweet
        </Button>
      </form>
    </div>
  );
}

export default Post;