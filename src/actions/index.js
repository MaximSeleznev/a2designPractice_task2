export const getProfiles =(value) => {
    return {
        type: "GET_PROFILES",
        payload: [...value]
         
    }
}
 
export const getPosts = (value) => {
    return {
        type: "GET_POSTS",
        payload: [...value]
    }
}
 
export const togglePostModal = () => {
    return {
        type: "TOGGLE_POST_MODAL"

    }
}

export const getComments = (value) => {
    return {
        type: "GET_COMMENTS",
        payload: [...value]
    }
}