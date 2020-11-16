import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
  Edit,
  Delete
} from "@material-ui/icons";
import React from "react";
import {Link} from 'react-router-dom';
import {useGlobalState} from '../config/globalState'



function Post({history, displayName, username, verified, text, image, avatar, id }) {


  const {store, dispatch} = useGlobalState()
  const {posts} = store


    const imgStyles = {
        width: '20%'
    }

    function deleteTweetPost(id) {
      const updatedPosts = posts.filter((p) => p._id !== parseInt(id))
      //setPosts(updatedPosts)
      dispatch({
        type: "setPosts",
        data: updatedPosts
      })
      console.log(updatedPosts)
    }

    // Handle the delete button
    function handleDelete(event) {
        event.preventDefault()
        deleteTweetPost(id)
        //history.push("/")
        console.log(id)
    }

      // Handle the edit button
      function handleEdit(event) {
        event.preventDefault()
        //updateTweetPost(id)
       //history.push(`/posts/edit/${id}`)
        //console.log(id)
    }

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUser className="post__badge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" style={imgStyles}/>
        <div>  
        <button><Link to={`/posts/edit/${id}`}> <Edit/></Link></button>
        <button onClick={handleDelete} ><Delete/></button> 
        </div>
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <button><FavoriteBorder fontSize="small" /></button>
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;