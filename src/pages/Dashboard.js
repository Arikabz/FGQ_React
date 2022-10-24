import React from 'react'
import TableWithVisuals from '../components/TableWithVisuals'

let url = 'http://localhost:6970'

async function getWeek (w) {
    try {
        const currentWeek = await fetch(url+`/api/season/week/${w}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : 'http://localhost:6970',

                },
            })
        console.log(currentWeek)
        return await currentWeek.json();
    } catch (error) {
        console.log(error)
    }
}

const Dashboard = () => {
    return (
        <div>
            <TableWithVisuals props={getWeek(6)}/>
        </div>
    )
}

export default Dashboard
