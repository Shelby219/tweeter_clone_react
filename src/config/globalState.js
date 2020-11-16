//store.js

import {createContext, useContext} from 'react'
//the context object
export const StateContext = createContext()

//the custom hook that wraps useContext
export const useGlobalState = ()=> useContext(StateContext)