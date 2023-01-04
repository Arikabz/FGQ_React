import TableWithVisuals from '../components/TableWithVisuals'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
import Footer from '../components/FooterSlim'
import {checkUserAndRegister} from '../services/Services'
import { useEffect, useState } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import RadialProgress from '../components/RadialProgress'
//import RadialProgress from '../components/RadialProgress'


const Dashboard = () => {
    const [token, setToken] = useState('');
    const [week, setWeek] = useState('')
    const { user, getAccessTokenSilently} = useAuth0();
    const {email, name} = user;

    const getToken = async() => {

        try {
            const tokenGot = await getAccessTokenSilently();
            console.log('token got: '+tokenGot)
            setToken(tokenGot);
            return tokenGot;
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        console.log('Dashboard getting week...')
        getToken().then(t=>
        checkUserAndRegister(email, name, t)
        )
        //getToken()
        //getCurrentWeek(token).then(x=> setWeek(x.result[0]))
        //updateSeason().then(res => console.log(res))
        //getCurrentWeek().then(x=> setWeek(x.result[0]))
    },[])
    return (
        (
            <div>
                <NavbarLoggedIn content={<TableWithVisuals token={token} weekNum={week.split(' ')[1]} />} footer={<Footer/>}/>
            </div>
        )
    )
}

export default withAuthenticationRequired(Dashboard, {
    onRedirecting: ()=> <RadialProgress/>,
})
