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
import { Link} from 'react-dom/server';
//import SweetAlert from 'sweetalert-react';
//import EditTwoot from "./EditTwoot";


function Post({history, displayName, username, verified, text, image, avatar, id, deleteTweetPost, updateTweetPost }) {
  //const [show, setShow] = useState(false);
    const imgStyles = {
        width: '20%'
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
          // return(
          //   <div>
          //   <button onClick={() => setShow(true)}>Alert</button>
          //   <SweetAlert
          //     show={show}
          //     title="Demo"
          //     html
          //     text={renderToStaticMarkup(<EditTwoot />)}
          //     onConfirm={() => setShow(false)}
          //   />
          // </div>
          // )
  
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
      
        <button onClick={handleEdit} ><Edit/></button> 
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