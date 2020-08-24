import React from 'react'
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg'
import '../../styles/home.sass'

const Home = () => {
    return (
        <div>
            <Header/>
            <section className='home'>
                <div className='home-container'>
                    <div className='home-logo'>
                    <LogoIcon/>
                    </div>
                    <h1 className='home-heading'>fendar.io</h1>
                    <p className='home-quote'>help people get to know each other!</p>
                    <Link className='home-link' to='/feed'>Start now</Link>
                </div>
                
            </section>
        </div>
        
    );
}

export default Home
