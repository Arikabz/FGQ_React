import RadialProgress from '../components/RadialProgress';
import Footer from '../components/FooterSlim';
import LeagueTable from '../components/LeagueTable';
import LeagueContent from '../components/LeagueContent';
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import {useState, useEffect} from 'react';
import {useAuth0, withAuthenticationRequired} from '@auth0/auth0-react'

const League = () => {
    const [token, setToken] = useState('');
    const { user, getAccessTokenSilently} = useAuth0();
    const { email, name } = user;
    
    const getToken = async () =>{
        try {
            const tokenGot = await getAccessTokenSilently();
            setToken(tokenGot);
            return tokenGot;
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getToken().then(t=>{
            //leagueCheks here
            //if not registered in League render a message
        })
    })

    return(
        (
            <div>
                <NavbarLoggedIn content={<LeagueContent token={token}/>} footer={<Footer/>}/>
            </div>
        )
    )
}

export default withAuthenticationRequired(League,{
    onRedirecting: () => <RadialProgress/>,
})
