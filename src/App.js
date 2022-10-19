import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className='container mx-auto'>
                    <Hero/>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
