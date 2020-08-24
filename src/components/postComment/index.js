import React from 'react'
import '../../styles/comment.sass'

const PostComment = props => {
    const {email, name, body} = props.comment
    return (
        <div className='modal-comment'> 
            <div  className='modal-comment-container'>
                <div className='modal-comment-username'>
                @{email}
                </div>
                <div className='modal-comment-title'>
                    {name}
                </div>
            </div>
            
            <div className='modal-comment-body'>
                {body}
            </div>
        </div>
    );
}

export default PostComment