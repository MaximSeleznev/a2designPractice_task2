import React from 'react'
import Header from '../../components/header'
import NewsCardContainer from '../../containers/newsCard'
import store from '../../store'
import '../../styles/feed.sass'
import '../../styles/newsCard.sass'


const Feed = (props) => {
    return (
        <div>
            <Header/>
            <section className='feed'>
                <h1 className='feed-heading'>Latest Posts</h1>
                {props.postsList.map((item) =>{ 
                return <NewsCardContainer id={item.id} key={item.id} username={store.getState().profiles.profilesList.find((val) => (val.id === item.userId))?store.getState().profiles.profilesList.find((val) => (val.id === item.userId)).username:null} title={item.title} body={item.body} />
                })}
            </section>
            
        </div>
    );
}

export default Feed

