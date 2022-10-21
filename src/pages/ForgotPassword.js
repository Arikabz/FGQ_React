import LoginForm from '../components/LoginForm'
import NavbarSidebar from '../components/NavbarSidebar'
import Footer from '../components/FooterSlim'


const ForgotPassword = () => {
  return (
        <div>
            <NavbarSidebar content={<LoginForm kind='forgot'/>} footer={<Footer/>}/>
        </div>
  )
}

export default ForgotPassword
