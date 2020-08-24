import React from 'react'
import store from '../../store'
import '../../styles/modal.sass'
import PostComment from '../postComment'

const PostModal = props => {
    const { userId, title, body } = props.postsList.find((elem) => (elem.id === props.postCommentsList[0].postId))
    const username = store.getState().profiles.profilesList.find((elem) => elem.id === userId).username
    const onClick = props.onClick
    return (
        <div className='modal-container' onClick={onClick}>
            <div className='modal-post'> 
                <div  className='modal-post-container'>
                    <div className='modal-post-username'>
                    @{username}
                    </div>
                    <div className='modal-post-title'>
                        {title}
                    </div>
                </div>
                
                <div className='modal-post-body'>
                    {body}
                </div>
                <div className='modal-post-divider'></div>

                {props.postCommentsList.map((comment) => (
                    <PostComment key={comment.id}  comment={comment}/>
                ))}
            </div>
        </div>
        
    );
};

export default PostModal
