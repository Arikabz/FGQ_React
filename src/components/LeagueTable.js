import { useAuth0, withAuthenticationRequired} from '@auth0/auth0-react'
import {useState, useEffect} from 'react'
import { registerUserInLeague, createLeague} from '../services/Services'
import RadialProgress from './RadialProgress';
import LeagueTableContent from './LeagueTableContent';

const LeagueTable = (props) => {
    const admin = props.admin;
    const {user} = useAuth0();
    const [leagueID, setLeagueID] = useState(props.leagueID);
    //const [token, setToken] = useState('');
    const token = props.token;
    const leagueUsers = props.leagueUsers;
    const [registered, setRegistered] = useState(props.registered);

    const newLeague = async () => {
        try {
            const response = await createLeague(user.email, token)
            setLeagueID(response.leagueID)
            setRegistered(true)
            if(response.league === 'valid'){
                window.location.reload(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const registerUser = async () => {
        try {
            console.log(leagueID)
            const response = await registerUserInLeague(user.email, leagueID, token)
            if(response.registered){
            setLeagueID(response.leagueID)
            setRegistered(true)
            }
            console.log(response)
            if(response.league === 'invalid'){
                alert('Invalid league')
            }
            else{
                window.location.reload(false)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const inputChange = (e) => {
        setLeagueID(e.target.value)
    }

    useEffect(()=>{
        setRegistered(props.registered)
    },[props.registered])


    if(registered&&token)
{
        return (
        <LeagueTableContent admin={admin} leagueUsers={leagueUsers} token={token} leagueID={leagueID} email={user.email}/>
        )
    }
    else{
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">No estas registrado en una liga aun.</h1>
                        <p className="py-6">Unete a una liga existente o crea una nueva.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ID de Liga</span>
                                </label>
                                <input type="text" placeholder="ID" className="input input-bordered" value={leagueID} onChange={inputChange}/>
                            </div>
                            <div className='flex space-x-3'>
                                <div className="basis-1/2 form-control mt-6">
                                    <button className="btn btn-primary" onClick={registerUser}>Unirse</button>
                                </div>
                                <div className="form-control mt-6 basis-1/2">
                                    <button className="btn btn-primary" onClick={newLeague} >Crear Liga</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuthenticationRequired(LeagueTable, {
    onRedirecting: () => <RadialProgress/>,
})
