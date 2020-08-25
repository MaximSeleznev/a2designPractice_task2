import React from 'react'
import store from '../../store'
import Profile from '../../modules/profile'
import { connect } from 'react-redux'
import {fetchPosts} from '../../helpers/fetchPosts'
import {fetchProfiles} from '../../helpers/fetchProfiles'
import NewsCardContainer from '../../containers/newsCard'
import PostModalContainer from '../../containers/postModal'


class User extends React.Component {
  
    constructor(props) {
        super(props)
        this.returnProfilesList = this.returnProfilesList.bind(this)
        this.returnId = this.returnId.bind(this)
        this.returnPostsList = this.returnPostsList.bind(this)
        this.returnPostCommentsList = this.returnPostCommentsList.bind(this)
        if (!store.getState().profiles.profilesList[0]) store.dispatch(fetchProfiles())    
        if (!store.getState().posts.postsList[0]) store.dispatch(fetchPosts(props.location.pathname.slice(8)))       
    }
    returnProfilesList() {
        return this.props.profilesList
    }

    returnId() {
        return parseInt(this.props.location.pathname.slice(8))
    }

    returnPostsList() {
        return this.props.postsList        
    }

    returnPostCommentsList() {
      return this.props.postCommentsList        
  }
   
    render() {
      
      return (
          <div>
              {store.getState().ui.isPostModalHidden?null:<PostModalContainer postCommentsList={this.returnPostCommentsList()} postsList= {this.returnPostsList()} /> }
              <Profile userId={this.returnId()} profilesList= {this.returnProfilesList()} /> 
              <br></br>
                <section className='user-posts'>
                    {this.returnPostsList().map((item) => (
                        <NewsCardContainer id={item.id} key={item.id} username={store.getState().profiles.profilesList.find((val) => (val.id === this.returnId())).username} title={item.title} body={item.body} />
                    ))}
                </section>
              
          </div>
        
      );
    }
  }

  const mapStateToProps = (state) => {
      return {
        profilesList: state.profiles.profilesList,
        postsList: state.posts.postsList,
        postCommentsList: state.posts.postCommentsList,
        isPostModalHidden: state.ui.isPostModalHidden
      }
  }   
   
  export default connect(mapStateToProps) (User)