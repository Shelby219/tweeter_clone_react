import React,{useState, useEffect, useReducer} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import twootData from './data/twoot_data'
import Sidebar from "./components.js/Sidebar";
import NotFound from './components.js/notFound'
import EditPost from "./components.js/EditPost.js";
import Feed from "./components.js/Feed";
import './style.css';
import stateReducer from './config/stateReducer'
import {StateContext} from './config/globalState'

const App = () => {

   // initial state for state reducer
   const initialState = {
    posts: []
  }

    const [store, dispatch] = useReducer(stateReducer,initialState)
    const {posts} = store
  //const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    //setPosts(twootData)
    dispatch({
      type: "setPosts",
      data: twootData
    })
  }, []);

   // Returns a single post based on the id provided
   function getPostFromId(id) {
    return posts.find((p) =>  p._id === parseInt(id))
  }
 
  
  return (
    <div className="app" >
    <StateContext.Provider value={{store,dispatch}}>
       <BrowserRouter>
       <Sidebar />
       <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/posts/edit/:id" render={(props) => <EditPost {...props} post={getPostFromId(props.match.params.id)}/> }/>
        <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
        
       </StateContext.Provider>
    </div>
  )
}

export default App
