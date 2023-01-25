import { useEffect} from 'react'

const Row = (props) => {

    return (
        <tr key={props.index}>
            <th>{props.index}</th>
            <td>{props.name}</td>
            <td>{props.points}</td>
        </tr>
    )
}

const LeagueTableContent = (props) => {
    const leagueUsers = props.leagueUsers

    useEffect(() => {

    })
    if(leagueUsers.length>0){
    return (
        <div className=''>
            <div className="min-h-full overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Lugar</th>
                            <th>Nombre</th>
                            <th>Puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        leagueUsers.map((e,i)=>{
                            return <Row index={i+1} name={e.userName} points={e.points}/>
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
