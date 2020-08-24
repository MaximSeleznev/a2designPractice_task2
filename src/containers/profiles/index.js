import React from 'react'
import People from "../../modules/people"
import { connect } from 'react-redux'
import store from '../../store'
import {fetchProfiles} from '../../helpers/fetchProfiles'

class Profiles extends React.Component {
  
    constructor(props) {
        super(props)
        this.returnProfileList = this.returnProfilesList.bind(this)
        if (!store.getState().profiles.profilesList[0]) store.dispatch(fetchProfiles())    
    }
    returnProfilesList() {
        return this.props.profilesList
        
    }
   
    render() {
      
      return (
        <People profileList= {this.returnProfileList()} /> 
      );
    }
  }

  const mapStateToProps = (state) => {
      return {
          profilesList: state.profiles.profilesList
      }
  }   
   
  export default connect(mapStateToProps) (Profiles)