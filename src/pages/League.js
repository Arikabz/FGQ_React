import RadialProgress from '../components/RadialProgress';
import Footer from '../components/FooterSlim';
import LeagueContent from '../components/LeagueContent';
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import {useState, useEffect} from 'react';
import {useAuth0, withAuthenticationRequired} from '@auth0/auth0-react'

const League = () => {
    const [token, setToken] = useState('');
    const { user, getAccessTokenSilently} = useAuth0();
    
    const getToken = async () =>{
        try {
            const tokenGot = await getAccessTokenSilently();
            return tokenGot;
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getToken().then(t=>{
            setToken(t)
            //leagueCheks here
            //if not registered in League render a message
        })
    })

    if(token!==''){
    return(
        (
            <div>
                <NavbarLoggedIn content={<LeagueContent token={token} user={user}/>} footer={<Footer/>}/>
            </div>
        )
    )
    }
    else{
        return <RadialProgress/>
    }
}

export default withAuthenticationRequired(League,{
    onRedirecting: () => <RadialProgress/>,
})
