export default function (state, action) {
    switch(action.type) {
        case "setPosts": {
            return {
                ...state,
                posts: action.data
            }
        }
        default: 
            return state
    }
}