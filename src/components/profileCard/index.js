import React from 'react';
import { Link } from 'react-router-dom'
import {getInitials} from '../../helpers/getInitials'

const ProfileCard = props => {
    const { id, name, website, avatarColor } = props;
    const avatarColorStyle = {
        background: avatarColor,
    }
    const avatarBorderColorStyle = {
        borderBottom: `50px solid ${avatarColor}`
    }
    return (
            <Link className='people-card' to={`/people/${id}`} style={avatarBorderColorStyle}>
                <div className='people-card-av' style={avatarColorStyle}>
                    {getInitials(name)}
                </div>
                <div className='people-card-name'>
                    {name}
                </div>
                <div className='people-card-website'>
                    https://{website}/
                </div>
            </Link>
    );
};

export default ProfileCard;
