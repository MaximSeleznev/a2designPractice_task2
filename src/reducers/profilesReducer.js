import initialState from './initialState'
 
 
export default function profilesReducer(state = initialState.profiles, action) {
    switch(action.type) {
          
        case "GET_PROFILES": {
             
            return { profilesList: action.payload}
            
        }
 
        default: return state
    }
}