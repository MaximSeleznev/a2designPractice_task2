import initialState from './initialState';
 
 
export default function uiReducer(state = initialState.ui, action) {
    switch(action.type) {

        case "TOGGLE_POST_MODAL": {
                return {
                    ...state, isPostModalHidden: !state.isPostModalHidden
                    }
                 
            }
        default: return state;
    }
}