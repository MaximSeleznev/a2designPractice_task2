import React from 'react'
import PostModal from '../../components/postModal'
import { connect } from 'react-redux'
import {togglePostModal} from '../../actions'
import store from '../../store'

class PostModalContainer extends React.Component {
  
    constructor(props) {
        super(props)
        this.returnPostsList = this.returnPostsList.bind(this)
        this.returnPostCommentsList = this.returnPostCommentsList.bind(this)
        this.toggleComments = this.toggleComments.bind(this)
    }
    returnPostsList() {
        return this.props.postsList        
    }

    returnPostCommentsList() {
      return this.props.postCommentsList        
  }

    toggleComments(event) {
        event.preventDefault()
        const { onToggle }  = this.props
        onToggle()
    }

    componentWillUnmount() {
        if (!store.getState().ui.isPostModalHidden) store.dispatch(togglePostModal())   
    }

    render() {
      
      return (       
        store.getState().ui.isPostModalHidden?null:<PostModal postCommentsList={this.returnPostCommentsList()} postsList= {this.returnPostsList()} onClick={this.toggleComments} /> 
      );
    }
  }

  const mapStateToProps = (state) => {
      return {
        isPostModalHidden: state.ui.isPostModalHidden
      }
  } 
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onToggle: () => {
            dispatch(togglePostModal())
        }
    }
} 
   
  export default connect(mapStateToProps, mapDispatchToProps) (PostModalContainer)