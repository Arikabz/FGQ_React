import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Hero/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
