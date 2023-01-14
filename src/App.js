import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import League from './pages/League'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword'
import { useAuth0 } from '@auth0/auth0-react';
//import ProtectedRoute from './components/protected-route'
//import { withAuthenticationRequired } from '@auth0/auth0-react';
import RadialProgress from './components/RadialProgress';


function App() {
    const {isLoading} = useAuth0();

    if (isLoading) {
        return <RadialProgress/>
    }
    //getWeek(6).then(x=>console.log(x.result[0].Games[1].Away))
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/league' element={<League />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
            </Routes>
        </div>
    );
}

export default App;
