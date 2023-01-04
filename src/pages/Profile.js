import React from 'react'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
import Pwofile from '../components/Pwofile'
import Footer from '../components/FooterSlim'
import RadialProgress from '../components/RadialProgress'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const Profile = () => {
    return (
        <NavbarLoggedIn content={<Pwofile />} footer={<Footer/>}/>
    )
}

export default withAuthenticationRequired (Profile, {
    onRedirecting: () => <RadialProgress/>,
})
