import {useEffect, useState} from 'react'

const Countdown = (props) => {
    const handTime = (t) => props.updateTimeLeft(t);
    const calculateTimeLeft = () => {
        let datenow = Date.now();
        const thursday = new Date(props.thursday)
        let wednesday = new Date(thursday.getTime()-86400000);
        //console.log('yahooo')
        //let wednesday = Date.now()
        const difference = +new Date(wednesday-datenow)

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference/ (1000*60*60*24)),
                hours: Math.floor(difference/ (1000*60*60)%24),
                minutes: Math.floor((difference/1000/60)%60),
                seconds: Math.floor((difference/ 1000)%60),
                time: true
            }
        }
        else {
            timeLeft = {
                time: false
            }
        }
        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    useEffect(()=> {
        const timer = setTimeout(()=>{
            setTimeLeft(calculateTimeLeft());
            handTime(calculateTimeLeft().time)
        }, 1000);
        return () => clearTimeout(timer)
    })
   return  timeLeft.time && (
        <div className="grid grid-flow-col gap-5 flex-col justify-center my-2 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-secondary rounded-box text-primary-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value":timeLeft.days}}></span>
                </span>
                days
            </div> 
            <div className="flex flex-col p-2 bg-secondary rounded-box text-primary-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value":timeLeft.hours}}></span>
                </span>
                hours
            </div> 
            <div className="flex flex-col p-2 bg-secondary rounded-box text-primary-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value":timeLeft.minutes}}></span>
                </span>
                min
            </div> 
            <div className="flex flex-col p-2 bg-secondary rounded-box text-primary-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value":timeLeft.seconds}}></span>
                </span>
                sec
            </div>
        </div>
    )
}

export default Countdown
