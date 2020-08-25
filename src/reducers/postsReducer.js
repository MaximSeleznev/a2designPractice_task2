import initialState from './initialState'
 
 
export default function postsReducer(state = initialState.posts, action) {
    switch(action.type) {
          
        case "GET_POSTS": {
             
            return {...state, postsList: action.payload.sort(() => Math.random() - 0.5) }
        }

        case "GET_COMMENTS": {
             
            return {...state, postCommentsList: action.payload }
        }
 
        default: return state
    }
}