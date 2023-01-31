import {useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Pwofile = (props) => {
    const [md, setMd] = useState(window.matchMedia("(min-width: 768px)").matches);
    const {user, isAuthenticated, isLoading } = useAuth0();
    const admin = props.admin;
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
            
            <div className={"flex-col "+(md ? 'stats shadow' : '')}>

                {md &&
                    <div className='stats shadow'>
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Puntos</div>
                            <div className="stat-value text-primary">{props.points}</div>
                            <div className="stat-desc">Puntos acumulados</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Lugar</div>
                            <div className="stat-value text-secondary">#{position}</div>
                            <div className="stat-desc">Posicion</div>
                        </div>
                    </div>
            }


                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={user.picture} alt={user.name}/>
                            </div>
                        </div>
                    </div>
                    {admin &&
                        <div className="text-secondary">ADMIN</div>
                }
                    <div className="stat-value">{leagueID}
                        <button onClick={() => {navigator.clipboard.writeText(leagueID); alert('Copied to Clipboard: '+leagueID)}} className='btn btn-ghost'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                            </svg>

                        </button>
                    </div>
                    <div className="stat-title">League ID</div>
                    <div className="stat-desc text-secondary">{user.email}</div>
                </div>
                {!md &&
                    <div className='stats shadow'>
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Puntos</div>
                            <div className="stat-value text-primary">{props.points}</div>
                            <div className="stat-desc">Puntos acumulados</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Lugar</div>
                            <div className="stat-value text-secondary">#{position}</div>
                            <div className="stat-desc">Posicion</div>
                        </div>
                    </div>
            }


            </div>
        )
    )
}

export default Pwofile
