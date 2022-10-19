import React from 'react'

const Card = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://media.gq-magazine.co.uk/photos/5d13ad354113b55f8e46adb7/16:9/w_2560%2Cc_limit/New-England-Patriots-06-GQ-18Oct17_getty_b.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Siente tu suerte.</h2>
                <p>&iquest;Listx para la emoci&oacute;n?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Registrarse</button>
                </div>
            </div>
        </div>
    )
}

export default Card
