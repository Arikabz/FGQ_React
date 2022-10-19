import './App.css';
import {Route, Routes} from 'react-router-dom'
import NavbarSidebar from './components/NavbarSidebar'
import Navbar from './components/Navbar'
import FooterSlim from './components/FooterSlim'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
