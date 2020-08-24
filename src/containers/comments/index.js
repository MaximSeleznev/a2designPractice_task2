import React from 'react'
import Feed from "../../modules/feed"
import { connect } from 'react-redux'
import store from '../../store'
import {fetchPosts} from '../../helpers/fetchPosts'
import {fetchProfiles} from '../../helpers/fetchProfiles'

class Comments extends React.Component {
  
    constructor(props) {
        super(props)
        this.returnPostsList = this.returnPostsList.bind(this)
        store.dispatch(fetchPosts())
        store.dispatch(fetchProfiles())
    }
    returnPostsList() {
        return this.props.postsList
        
    }
   
    render() {
      
      return (
        <Feed postsList= {this.returnPostsList()} /> 
      );
    }
  }

  const mapStateToProps = (state) => {
      return {
        postsList: state.posts.postsList,
        profilesList: state.profiles.profilesList,
      }
  }   
   
  export default connect(mapStateToProps) (Comments)