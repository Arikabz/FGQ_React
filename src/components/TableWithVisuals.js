import React, {useEffect, useState} from 'react'
import Select from '../components/Select'
import { getWeek } from '../services/Services'

const Entry = (props) => {
    let homeScore, awayScore;
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


    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
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
            </td>
            {!happened &&
                <td>
                    <div className="font-bold">{props.game.Time}</div>
                    <div className="text-sm opacity-50">{props.game.TV.length>4 ? 'CBS' : props.game.TV}</div>
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

const TableWithVisuals = (props) => {
    const [stuff, setStuff] = useState({lmao:'yes'});
    useEffect(()=>{
        console.log('componentDidMount lifecycle')
        getWeek(3).then(x=> setStuff(x))
    },[])
    const changeWeek = (num) => {
        console.log('change week to:')
        console.log(num)
        getWeek(num).then(x=> setStuff(x))
    }
    let games = []
    if(stuff.result){

        games = stuff.result[0].Games || []
        //console.log(stuff.result[0].Games[1].Home)
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Away</th>
                        <th></th>
                        <th>Home</th>
                        <th>More</th>
                        <th>
                            <Select thisWeek={props.thisWeek} onChange={changeWeek} num={16}/>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {games.map((g,i) => {
                        return <Entry key={i+1} game={g}/>
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
        </div>
    )
}

export default TableWithVisuals
