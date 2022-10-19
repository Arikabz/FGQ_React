import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.gq-magazine.co.uk/photos/5d13ad354113b55f8e46adb7/16:9/w_2560%2Cc_limit/New-England-Patriots-06-GQ-18Oct17_getty_b.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">&iexcl;Entra ya!</h1>
                    <p className="mb-5">&iexcl;Comienza a ver las predicciones!</p>
                    <Link to='/signup' className='btn btn-primary mx-2'>Registrarse</Link>
                    <Link to='/login' className='btn btn-primary mx-2'>Entrar</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
