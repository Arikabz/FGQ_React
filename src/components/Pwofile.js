import {useEffect, } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Pwofile = (props) => {
    const {user, isAuthenticated, isLoading } = useAuth0();
    const leagueUsers = props.leagueUsers;
    const position = leagueUsers.indexOf(leagueUsers.find(e=> e.email === user.email))+1;
    const leagueID = props.leagueID;


    useEffect(()=>{
    })


    if(isLoading){
        return <div>Loading ...</div>;
    }
    return (
        isAuthenticated && leagueID&&(
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Puntos</div>
                    <div className="stat-value text-primary">{props.points}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Position</div>
                    <div className="stat-value text-secondary">#{position}</div>
                    <div className="stat-desc">Something here</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={user.picture} alt={user.name}/>
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">{leagueID}</div>
                    <div className="stat-title">League ID</div>
                    <div className="stat-desc text-secondary">{user.email}</div>
                </div>

            </div>
        )
    )
}

export default Pwofile
