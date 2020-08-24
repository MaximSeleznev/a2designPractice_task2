import axios from 'axios'
import {getProfiles} from '../actions'
import {randomColor} from '../helpers/randomColor'

export const fetchProfiles = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                response.data.forEach(element => {
                    element.avatarColor=randomColor()
                })
                dispatch(getProfiles(response.data))
            })
    }
}