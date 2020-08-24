import React from 'react'
import Feed from "../../modules/feed"
import { connect } from 'react-redux'
import store from '../../store'
import {fetchPosts} from '../../helpers/fetchPosts'
import {fetchProfiles} from '../../helpers/fetchProfiles'
import PostModalContainer from '../../containers/postModal'

class Posts extends React.Component {
  
    constructor(props) {
        super(props)
        this.returnPostsList = this.returnPostsList.bind(this)
        this.returnPostCommentsList = this.returnPostCommentsList.bind(this)
        if (!store.getState().profiles.profilesList[0]) store.dispatch(fetchProfiles()) 
        if (!store.getState().posts.postsList[0]) store.dispatch(fetchPosts())
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
          <Feed postsList= {this.returnPostsList()} /> 
        </div>
        
      );
    }
  }

  const mapStateToProps = (state) => {
      return {
        postsList: state.posts.postsList,
        profilesList: state.profiles.profilesList,
        postCommentsList: state.posts.postCommentsList,
      }
  }  
   
  export default connect(mapStateToProps) (Posts)