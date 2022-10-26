import TableWithVisuals from '../components/TableWithVisuals'

const url = 'http://localhost:6969';

const sth = async (w) => {
    try {
        const currentWeek = await fetch(url+`/api/season/week/${w}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                },
            })
        const response = await currentWeek.json();
        return await response;
    } catch (error) {
        console.log(error)
    }
}



const Dashboard = () => {
    return (
        <div>
            <TableWithVisuals />
        </div>
    )
}

export default Dashboard
