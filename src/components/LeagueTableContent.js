import { useEffect, useState} from 'react'
import {editExtraPoints} from '../services/Services'

const Row = (props) => {
    const userID = props.userID;
    const points = props.points
    const admin = props.admin;
    const token = props.token;
    const [extraPoints, setExtraPoints] = useState(0)
    const [reason, setReason] = useState('')
    const submitExtra = async () => {
        if(extraPoints!==0&&reason){
            console.log(extraPoints)
            console.log(reason)
        editExtraPoints(userID,extraPoints,reason ,token).then(x=>{
                window.location.reload(false)
            })
        } else {
            alert('Fields Missing')
        }
    }
    const change = (e) => {
        setExtraPoints(e.target.value)
    }
    const inputChange = (e) => {
        setReason(e.target.value)
    }

    return (
        <tr className='flex-row space-x-0' key={props.index}>
            <th>{props.index}</th>
            <td>{props.name}</td>
            <td>{points}
            </td>
            {admin &&
                <td className='flex space-x-3'>
                    <select onChange={change} className='select-bordered select '>
                        <option disabled selected></option>
                        <option value="3">+3</option>
                        <option value="1">+1</option>
                        <option value="-1">-1</option>
                        <option value="-3">-3</option>
                    </select>
                    {extraPoints!==0 &&
                        <input type="text" placeholder='Reason' onChange={inputChange} className='input input-bordered'/>
                }
                    <button className='btn  ' onClick={submitExtra}>Submit</button>
                </td>
        }
        </tr>
    )
}

const LeagueTableContent = (props) => {
    const leagueUsers = props.leagueUsers
    const admin = props.admin;
    const token = props.token;

    useEffect(() => {

    })
    if(leagueUsers.length>0){
        return (
            <div className=''>
                <div className="min-h-full overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr className=''>
                                <th className='text-xs md:text-base'>Lugar</th>
                                <th className='text-xs md:text-base'>Nombre</th>
                                <th className='text-xs md:text-base'>Puntos</th>
                                {admin && <th className='text-xs md:text-base'>Extra</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                            leagueUsers.map((e,i)=>{
                                return <Row index={i+1} token={token} admin={admin} userID={e._id} name={e.userName} points={e.points} extraPoints={e.extraPoints}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}

export default LeagueTableContent
