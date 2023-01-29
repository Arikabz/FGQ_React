import {useState, useEffect} from 'react'
import {getUserInfo, getLeagueUsers, updatePoints, updateSeason} from '../services/Services'
import {useAuth0} from '@auth0/auth0-react'
import Pwofile from './Pwofile'
import LeagueTable from './LeagueTable'
import RadialProgress from './RadialProgress'

const LeagueContent = (props) => {
    const [registered, setRegistered] = useState(true)
    const [admin, setAdmin] = useState(false)
    const {user} = useAuth0();
    const [leagueID, setLeagueID] = useState('')
    const [leagueUsers, setLeagueUsers] = useState('')
    const [points, setPoints] = useState('')
    const token = props.token

    useEffect(()=>{
        if(token&&leagueUsers===''){
            getUserInfo(user.email, token).then(res=> {
                setRegistered(res.registered)
                setAdmin(res.userData.admin)
                setLeagueID(res.userData.leagueID)
                setPoints(res.userData.points)
                updatePoints(res.userData.leagueID, token).then(
                    getLeagueUsers(res.userData.leagueID, token).then(x=>{
                        setLeagueUsers(x.leagueMembers)
                    })
                )
            })
        }

    })

    const updatePointsfn = async () => {
        console.log('click')
        const res = await updatePoints(leagueID,token)
        console.log(res)
    }

    if(leagueID!==''&&leagueUsers!==''){
        return (
            <div className=''>
                <Pwofile admin={admin} token={token} leagueUsers={leagueUsers} leagueID={leagueID} points={points}/>
                <LeagueTable token={props.token} leagueUsers={leagueUsers} leagueID={leagueID} registered={registered}/>
                <button className='btn' onClick={updatePointsfn}>update points</button>
            </div>

        )
    }
    else{
        return <RadialProgress/>
    }
}

export default LeagueContent
