import React, { useEffect, useState } from 'react'

const RadialProgress = () => {

    const [count, setCount] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=> setCount(count+5), 20);
        return () => clearInterval(interval)
    })
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <p className="py-6">Loading</p>
                    <div className="radial-progress" style={{"--value":count}}></div>
                </div>
            </div>
        </div>
    )
}

export default RadialProgress
