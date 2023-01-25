import TableWithVisuals from '../components/TableWithVisuals'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
import Footer from '../components/FooterSlim'
import {checkUserAndRegister, getUserInfo} from '../services/Services'
import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import RadialProgress from '../components/RadialProgress'
//import RadialProgress from '../components/RadialProgress'


const Dashboard = () => {
    const [token, setToken] = useState('');
    const { user, getAccessTokenSilently} = useAuth0();
    const {email, name} = user;
    const [firstTime, setFirstTime] = useState(false);
    const [registered, setRegistered] = useState(true);

    const getToken = async() => {

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
        checkUserAndRegister(email, name, t).then(res=>{
                setFirstTime(res.firstTime)
                if(res.firstTime===false){
                    getUserInfo(email, t).then(userInfo =>{
                        setRegistered(userInfo.registered)
                        return
                    })
                    //useNavigate('/profile')
                    //alert('It is the first time!')
                }else{
                    //alert('It is not the first time.')
                    return
                }
            })
        }
        )
        //getToken()
        //getCurrentWeek(token).then(x=> setWeek(x.result[0]))
        //updateSeason().then(res => console.log(res))
        //getCurrentWeek().then(x=> setWeek(x.result[0]))
   })
    if(!registered)
    {
        return <Navigate to='/profile'/>

    } else{
    return (
        (
            <div>
                <NavbarLoggedIn content={<TableWithVisuals token={token}  />} footer={<Footer/>}/>
            </div>
        )  
    )

    }
}

export default withAuthenticationRequired(Dashboard, {
    onRedirecting: ()=> <RadialProgress/>,
})
