import NavbarSidebar from '../components/NavbarSidebar'
import LoginForm from '../components/LoginForm'
import Footer from '../components/FooterSlim.js'

const Signup = () => {
    return (
        <div>
            <NavbarSidebar content={<LoginForm kind='signup'/>} footer={<Footer/>}/>
        </div>
    )
}

export default Signup
