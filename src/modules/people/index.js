import React from 'react'
import Header from '../../components/header'
import ProfileCard from '../../components/profileCard';
import '../../styles/people.sass'
import '../../styles/profileCard.sass'

const People = (props) => {
    return (
        <div>
            <Header/>
            <section className='people'>
                <h1 className='people-heading'>Top-picked authors:</h1>
                <div className='people-container'>
                    {props.profileList.map((item) =>{ 
                    return <ProfileCard key={item.id} id={item.id} name={item.name} website={item.website} avatarColor={item.avatarColor} />
                    })}
                </div>
                
            </section>
            
        </div>
    );
}

export default People

