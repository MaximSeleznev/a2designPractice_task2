import axios from 'axios'
import {getComments} from '../actions'

export const fetchComments = (postId = 0) => {
    // if (!postId) return
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => {
                dispatch(getComments(response.data))
            })
    }
    
}