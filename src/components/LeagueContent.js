import {useState, useEffect} from 'react'
import {getUserInfo, getLeagueUsers, updatePoints} from '../services/Services'
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
                setLeagueUsers([])
                if(res.userData.leagueID){
                    updatePoints(res.userData.leagueID, token).then(y=>{
                        if(y.updated){
                            console.log('updated points')
                            getLeagueUsers(res.userData.leagueID, token).then(x=>{
                                setLeagueUsers(x.leagueMembers)
                                const newUser = x.leagueMembers.find(x=>x._id===res.userData._id)
                                setPoints(newUser.points)
                            })
                        }                     }
                    )
                } else{
                    setPoints(0)
                    setLeagueUsers([])
                }
            })
        }

    })


    if(leagueID!==''&&leagueUsers!==''&&points!==''){
        return (
            <div className=''>
                <Pwofile admin={admin} token={token} leagueUsers={leagueUsers} leagueID={leagueID} points={points}/>
                <LeagueTable admin={admin} token={props.token} leagueUsers={leagueUsers} leagueID={leagueID} registered={registered}/>
            </div>

        )
    }
    else{
        return <RadialProgress/>
    }
}

export default LeagueContent
