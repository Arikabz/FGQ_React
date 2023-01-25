import {useState, useEffect} from 'react'
import {getUserInfo, getLeagueUsers} from '../services/Services'
import {useAuth0} from '@auth0/auth0-react'
import Pwofile from './Pwofile'
import LeagueTable from './LeagueTable'
import RadialProgress from './RadialProgress'

const LeagueContent = (props) => {
    const [registered, setRegistered] = useState(true)
    const {user} = useAuth0();
    const [leagueID, setLeagueID] = useState('')
    const [leagueUsers, setLeagueUsers] = useState('')
    const [points, setPoints] = useState('')
    const token = props.token

    useEffect(()=>{
        if(token&&leagueUsers===''){
            getUserInfo(user.email, token).then(res=> {
                setRegistered(res.registered)
                setLeagueID(res.userData.leagueID)
                setPoints(res.userData.points)
                getLeagueUsers(res.userData.leagueID, token).then(x=>{
                    setLeagueUsers(x.leagueMembers)
                })
            })
        }

    })

    if(leagueID!==''&&leagueUsers!==''){
    return (
        <div className=''>
            <Pwofile token={token} leagueUsers={leagueUsers} leagueID={leagueID} points={points}/>
            <LeagueTable token={props.token} leagueUsers={leagueUsers} leagueID={leagueID} registered={registered}/>
        </div>

    )
    }
    else{
        return <RadialProgress/>
    }
}

export default LeagueContent
