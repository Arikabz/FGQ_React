import LoginForm from '../components/LoginForm'
import NavbarSidebar from '../components/NavbarSidebar'
import Footer from '../components/FooterSlim'

const Login = () => {
    return (
        <div>
            <NavbarSidebar content={<LoginForm kind='login'/>} footer={<Footer/>}/>
        </div>
    )
}

export default Login
