import React from 'react'
import LoginButton from './login-button'
import SignupButton from './signup-button'

const HomePage = () => {
    let heroImage='https://patch.com/img/cdn20/users/22920172/20190201/050114/styles/raw/public/processed_images/superbowl-getty-1549058474-9292.jpg'
    heroImage = 'https://media.gq-magazine.co.uk/photos/5d13ad354113b55f8e46adb7/16:9/w_2560%2Cc_limit/New-England-Patriots-06-GQ-18Oct17_getty_b.jpg'
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">&iexcl;Entra ya!</h1>
                    <p className="mb-5">&iexcl;Comienza a ver las predicciones!</p>
                    <LoginButton looks={'btn btn-primary mx-2'} />
                    <SignupButton looks={'btn btn-primary mx-2'} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
