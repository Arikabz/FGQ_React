import React, {useEffect, useState} from 'react'
import Select from '../components/Select'
import RadialProgress from '../components/RadialProgress'
import { getWeek, getCurrentWeek, updateSeason, checkUpdate} from '../services/Services'
import { useAuth0} from '@auth0/auth0-react'


const Entry = (props) => {
    let homeScore, awayScore;
    const [showInput, setShowInput] = useState(props.showInput);
    const [individualToggle, setIndividualToggle] = useState(false);
    let happened = props.game.result || false
    if(props.game.result){
        let scores = props.game.result.split(' ')

        const awayInitials = () => {
            if(props.game.Away.includes(' ')){
                let splitSpaces = props.game.Away.split(' ').map(x=> {
                    if(!x.includes('.')){
                        return x.charAt()
                    }else {return x}
                }).join('')
                if(splitSpaces.includes('.')){
                    return splitSpaces.split('').filter(x=> x!=='.').join('')
                } else{
                    return splitSpaces
                }

            } else{
                return props.game.Away.toUpperCase().slice(0,3)
            }
        }
        if(awayInitials()===scores[0]){
            homeScore = scores[4]
            awayScore = scores[1];
        }
        else {
            homeScore = scores[1]
            awayScore = scores[4];
        }
    } 
    function getStadium () {
        if(props.game.Buy_Tickets){
            return props.game.Venue
        } else{
            return props.game.TV
        }
    }
    function winLose (current,other){
        let str = 'basis-1/3'
        return current<other ? str + ' text-red-600' : str + ' text-green-600'
    }

    const showGuessInput = () => {
        setShowInput(!showInput)
        setIndividualToggle(!individualToggle)
    }

    useEffect(()=>{
        if(!individualToggle){
        setShowInput(props.showInput)
        }
    },[individualToggle, props.showInput])

    return  (
        <tr>
            <th>
                <label className=''>
                    <input type="checkbox" className="checkbox" onClick={showGuessInput} />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={props.game.AwayLogo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{props.game.Away}</div>
                        <div className="text-sm opacity-50">{awayScore}</div>
                    </div>
                </div>
            {showInput &&
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
            }
            </td>
            {!happened &&
                <td>
                    <div className="font-bold">{props.game.Time}</div>
                    <div className="text-sm opacity-50">{props.game.TV.length>4 ? 'CBS' : props.game.TV}</div>
            {showInput &&
                    <div>
                        <button className="btn btn-primary">Submit</button>
                    </div>
            }
                </td>
        }
            {happened &&
                <td>
                    <div className=''>
                        <div className="font-bold flex flex-row">
                            <div className={winLose(awayScore,homeScore)}>
                                {awayScore} 
                            </div>
                            <div className='basis-1/3'>
                            </div>
                            <div className={winLose(homeScore,awayScore)}>
                                {homeScore} 
                            </div>
                        </div>
                    </div>
                </td>
        }
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={props.game.HomeLogo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{props.game.Home}</div>
                        <div className="text-sm opacity-50">{homeScore}</div>
                    </div>
                </div>
            {showInput &&
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
            }
            </td>
            <td>
                {!happened && 
                    <div>{getStadium()}</div>
            }
                {happened && 
                    <a className='btn btn-ghost btn-xs' href={props.game.gameInfo} target='_blank' rel='noreferrer'>Game Info</a>
            }
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    )
}

const TableWithVisuals = ({ weekNum, thisWeek}) => {
    const [token, setToken] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [stuff, setStuff] = useState({lmao:'yes'});
    const [currentWeek, setCurrentWeek] = useState('')
    const {getAccessTokenSilently} = useAuth0();

    const getToken = async() => {
        try {
            const token = await getAccessTokenSilently();
            setToken(token);
            return token 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        //const token = await getToken()

        getToken().then(t =>
        {
                checkUpdate(1,t).then(m=> {
                    const lastUpdated = new Date(m.result[0].updatedAt) 
                    const miliseconds = lastUpdated.getTime()
                    const now = Date.now()
                    console.log('now: '+ now)
                    console.log('last: '+ miliseconds)
                    if(miliseconds + 259300000 < now){
                        console.log('season needs updating')
                        updateSeason(t).then(z=>{
                            getCurrentWeek(t).then(x=> {
                                setCurrentWeek(x)
                                getWeek(x.result[0].split(' ')[1], t)
                                    .then(y=>setStuff(y))
                            })

                        })
                    } else{
                        console.log('no update')
                        getCurrentWeek(t).then(x=> {
                            setCurrentWeek(x)
                            getWeek(x.result[0].split(' ')[1], t)
                                .then(y=>setStuff(y))
                        })

                    }
                })
            }
        )
        //getWeek(currentWeek, token).then(y=>setStuff(y))
        //getWeek(token).then(x=> setStuff(x))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const changeWeek = (num) => {
        console.log('change week to:')
        console.log(num)
        getWeek(num, token).then(x=> setStuff(x))
    }
    const toggleAllInputs = () => {
        setShowInput(!showInput)
    }
    let games = []
    if(stuff.result){

        games = stuff.result[0].Games || []
        //console.log(stuff.result[0].Games[1].Home)
    }
    return (
        <div className="overflow-x-auto w-full">
            {stuff.result &&
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" onClick={toggleAllInputs} />
                                </label>
                            </th>
                            <th>Away</th>
                            <th></th>
                            <th>Home</th>
                            <th>More</th>
                            <th>
                                <Select thisWeek={currentWeek.result[0]} onChange={changeWeek} num={18<Number(currentWeek.result[0].split(' ')[1]) ? Number(currentWeek.result[0].split(' ')[1]) : 18}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {games.map((g,i) => {
                            return (
                                    <Entry key={i+1} game={g} showInput={showInput}/>
                            ) 
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Away</th>
                            <th></th>
                            <th>Home</th>
                            <th>More</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
        }
            {!stuff.result &&

                <RadialProgress />
        }
        </div>
    )
}

export default TableWithVisuals
