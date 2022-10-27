import TableWithVisuals from '../components/TableWithVisuals'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
import Footer from '../components/FooterSlim'
import {getCurrentWeek} from '../services/Services'
import { useEffect, useState } from 'react'


const Dashboard = () => {
    const [week, setWeek] = useState('')
    useEffect(()=>{
        console.log('getting week...')
        getCurrentWeek().then(x=> setWeek(x.result[0]))

    },[])
    console.log(week)
    return (
        <div>
            <NavbarLoggedIn content={<TableWithVisuals thisWeek={week}/>} footer={<Footer/>}/>
        </div>
    )
}

export default Dashboard
