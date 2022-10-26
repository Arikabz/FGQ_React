import React, {useEffect, useState} from 'react'
import { getWeek } from '../services/Services'

const Entry = (props) => {
    console.log('new Entry')
    console.log(props.game.result)
    let scores = props.game.result.split(' ').filter(x=> Number(x))
    let homeScore = scores[1], awayScore = scores[0];
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
                <a href={props.game.gameInfo}>Game Info</a>
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
        getWeek(2).then(x=> setStuff(x))
    },[])
    let games = []
    if(stuff.result){

        games = stuff.result[0].Games || []
        console.log('games set')
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
                        <th>Home</th>
                        <th>Something</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {games.map(g => {
                        return <Entry game={g}/>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Away</th>
                        <th>Home</th>
                        <th>Something</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default TableWithVisuals
