import React from 'react'

const NewsCard = props => {
    const { username, title, body, onClick } = props;
    return (
        <div className='feed-card' onClick={onClick}> 
            <div  className='feed-card-container'>
                <div className='feed-card-username'>
                @{username}
                </div>
                <div className='feed-card-title'>
                    {title}
                </div>
            </div>
            
            <div className='feed-card-body'>
                {body}
            </div>
        </div>
    );
};

export default NewsCard
