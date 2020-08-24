import React from 'react'
import NewsCard from '../../components/newsCard'
import { connect } from 'react-redux'
import {togglePostModal} from '../../actions'
import {fetchComments} from '../../helpers/fetchComments'

class NewsCardContainer extends React.Component {
  
    constructor(props) {
        super(props)
        this.returnUsername = this.returnUsername.bind(this)
        this.returnTitle = this.returnTitle.bind(this)
        this.returnBody = this.returnBody.bind(this)
        this.toggleComments = this.toggleComments.bind(this)
        this.returnId = this.returnId.bind(this)
    }

    returnUsername() {
        return this.props.username
    }

    returnTitle() {
        return this.props.title
    }

    returnBody() {
        return this.props.body
    }

    returnId() {
        return this.props.id
    }

    toggleComments(event) {
        event.preventDefault()
        const { onToggle }  = this.props
        onToggle(this.returnId())
    }

    render() {
      
      return (       
        <NewsCard username={this.returnUsername()} title={this.returnTitle()} body={this.returnBody()} onClick={this.toggleComments}/>
      );
    }
  }

  const mapStateToProps = (state) => {
      return {
        postCommentsList: state.posts.postCommentsList,
        isPostModalHidden: state.ui.isPostModalHidden
      }
  } 
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onToggle: (id) => {
            dispatch(togglePostModal())
            dispatch(fetchComments(id))
        }
    }
} 
   
  export default connect(mapStateToProps, mapDispatchToProps) (NewsCardContainer)