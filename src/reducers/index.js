import { combineReducers } from 'redux'
import profilesReducer from './profilesReducer'
import postsReducer from './postsReducer'
import uiReducer from './uiReducer'
 
const rootReducer = combineReducers({
     
    profiles: profilesReducer,
    posts: postsReducer,
    ui: uiReducer
   
})
 
export default rootReducer