import React from 'react'
import Header from '../../components/header'
import '../../styles/user.sass'
import {getInitials} from '../../helpers/getInitials'

const Profile = (props) => {
    const user = props.profilesList.find((val) => (val.id === parseInt(props.userId)))
    const color = props.profilesList.find((val) => (val.id === parseInt(props.userId))).avatarColor
    const avatarColorStyle = {
        background: color
    }
    const avatarBorderColorStyle = {
        borderBottom: `50px solid ${color}`
    }
    return (
        <div>
            <Header/>
            <section className='user-profile' style={avatarBorderColorStyle}>
                <div className='user-profile-av' style={avatarColorStyle}>
                    {getInitials(user?user.name:'')}
                </div>
                <div className='user-profile-container'> 
                    <div className='user-profile-username'>
                        @{user?user.username:''}
                    </div>
                    <div className='user-profile-name'>
                        {user?user.name:''}
                    </div>
                    <div className='user-profile-website'>
                        https://{user?user.website:''}/
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
