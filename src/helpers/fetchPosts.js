import axios from 'axios'
import {getPosts} from '../actions'

export const fetchPosts = (userId = 0) => {
    if (userId) {
        return (dispatch) => {
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                .then(response => {
                    dispatch(getPosts(response.data))
                })
        }
    } else {
        return (dispatch) => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    dispatch(getPosts(response.data))
                })
        }
    }
    
}