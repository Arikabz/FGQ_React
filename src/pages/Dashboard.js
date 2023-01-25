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
    const [registered, setRegistered] = useState(true);
    const [userID, setUserID] = useState('');
    const [leagueID, setLeagueID] = useState('');

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
        setToken(t)
        checkUserAndRegister(email, name, t).then(res=>{
                if(res.firstTime===false){
                    getUserInfo(email, t).then(userInfo =>{
                        setUserID(userInfo.userData._id)
                        setLeagueID(userInfo.userData.leagueID)
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

    } else if(token && userID&&leagueID){
    return (
        (
            <div>
                <NavbarLoggedIn content={<TableWithVisuals token={token} leagueID={leagueID} userID={userID} registered={registered}  />} footer={<Footer/>}/>
            </div>
        )  
    )

    } else {
        return <RadialProgress/>
    }
}

export default withAuthenticationRequired(Dashboard, {
    onRedirecting: ()=> <RadialProgress/>,
})
