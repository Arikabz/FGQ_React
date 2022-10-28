import React from 'react'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
import Pwofile from '../components/Pwofile'
import Footer from '../components/FooterSlim'

const Profile = () => {
    return (
        <NavbarLoggedIn content={<Pwofile />} footer={<Footer/>}/>
    )
}

export default Profile
