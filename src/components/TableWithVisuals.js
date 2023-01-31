import React, {useEffect, useState} from 'react'
import Select from '../components/Select'
import RadialProgress from '../components/RadialProgress'
import Countdown from '../components/Countdown.js'
import {makePredictionTemplate, getWeek, getCurrentWeek, updateSeason, checkUpdate, uploadSinglePrediction} from '../services/Services'


const Entry = (props) => {
    const getTime = () => props.getTime()
    let homeScore, awayScore;
    const [prediction, setPrediction] = useState('');
    const [week, setWeek] = useState('');
    const [inputAway, setInputAway] = useState('');
    const [inputHome, setInputHome] = useState('');
    const [awayPrediction, setAwayPrediction] = useState(prediction.awayPrediction);
    const [homePrediction, setHomePrediction] = useState(prediction.homePrediction);
    const token = props.token;
    const gameNum = prediction.gameNum;
    const userID = props.userID;
    const leagueID = props.leagueID;
    const [showInput, setShowInput] = useState(props.showInput);
    const [individualToggle, setIndividualToggle] = useState(false);
    const happened = props.game.result || false;
    if(props.game.result){
        let scores = props.game.result.split(' ')

        const awayInitials = () => {
            if(props.game.Away.includes(' ')){
                let splitSpaces = props.game.Away.split(' ').map(x=> {
                    if(!x.includes('.')){
                        return x.charAt()
                    }else {return x}
                }).join('')
                if(splitSpaces.includes('.')){
                    return splitSpaces.split('').filter(x=> x!=='.').join('')
                } else{
                    return splitSpaces
                }

            } else{
                return props.game.Away.toUpperCase().slice(0,3)
            }
        }
        if(awayInitials()===scores[0]){
            homeScore = scores[4]
            awayScore = scores[1];
        }
        else {
            homeScore = scores[1]
            awayScore = scores[4];
        }
    } 
    function getStadium () {
        if(props.game.Buy_Tickets){
            return props.game.Venue
        } else{
            return props.game.TV
        }
    }
    function winLose (current,other){
        let str = 'basis-1/3'
        return current<other ? str + ' text-red-600' : str + ' text-green-600'
    }

    const showGuessInput = () => {
        console.log(getTime())
        if(!awayPrediction&&!homePrediction&&getTime()>0){
            setShowInput(!showInput)
            setIndividualToggle(!individualToggle)
        }
    }

    const submitPrediction = async () => {
        if(Number(inputAway)&&Number(inputHome)){
            const response = await uploadSinglePrediction(userID, leagueID, week, gameNum, inputAway, inputHome, token)
            if(response.update){
                setAwayPrediction(inputAway)
                setHomePrediction(inputHome)
            }
            console.log('update succesful: '+response.update)
        }
        else{
            alert('Predictions must be numbers.')
        }
    }

    const handleAway = (e) => {
        setInputAway(e.target.value)
    }

    const handleHome = (e) => {
        setInputHome(e.target.value)
    }

    useEffect(()=>{
        if(!individualToggle){
            setShowInput(props.showInput)
        }
        setHomePrediction(props.prediction.homePrediction)
        setAwayPrediction(props.prediction.awayPrediction)
        setPrediction(props.prediction)
        setWeek(props.week)
    },[individualToggle, props.showInput, props.prediction, props.week])

    return  (
        <tr>
            <th>
                <label className=''>
                    <input type="checkbox" className="checkbox" onClick={showGuessInput} />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={props.game.AwayLogo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{props.game.Away.replace(/[\s\n\d]/g,'').split(/(?=[A-Z])/).join(' ')}</div>
                        { awayPrediction &&
                            <div className="text-accent">{awayPrediction}</div>
                    }
                    </div>
                </div>
                {showInput && !happened && !awayPrediction &&
                    <div>
                        <input onChange={handleAway} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
            }
            </td>
            {!happened &&
                <td>
                    <div className="font-bold">{props.game.Time}</div>
                    <div className="text-sm opacity-50">{props.game.TV.length>4 ? 'CBS' : props.game.TV}</div>
                    {showInput && !happened && !awayPrediction &&
                        <div>
                            <button onClick={submitPrediction} className="btn btn-primary">Submit</button>
                        </div>
                }
                </td>
        }
            {happened &&
                <td>
                    <div className=''>
                        <div className="font-bold flex flex-row">
                            <div className={winLose(awayScore,homeScore)}>
                                {awayScore} 
                            </div>
                            <div className='basis-1/3'>
                            </div>
                            <div className={winLose(homeScore,awayScore)}>
                                {homeScore} 
                            </div>
                        </div>
                    </div>
                </td>
        }
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={props.game.HomeLogo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{props.game.Home.replace(/[\s\n\d]/g,'').split(/(?=[A-Z])/).join(' ')}</div>
                        { homePrediction &&
                            <div className=" text-accent ">{homePrediction}</div>
                    }
                    </div>
                </div>
                {showInput && !happened && !homePrediction &&
                    <div>
                        <input type="text" onChange={handleHome} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
            }
            </td>
            <td>
                {!happened && 
                    <div>{getStadium()}</div>
            }
                {happened && 
                    <a className='btn btn-ghost btn-xs' href={props.game.gameInfo} target='_blank' rel='noreferrer'>Game Info</a>
            }
            </td>
            <th>
            </th>
        </tr>
    )
}

const TableWithVisuals = (props ) => {
    const token = props.token;
    const userID = props.userID;
    const leagueID = props.leagueID;
    const [showInput, setShowInput] = useState(false);
    const [timeLeft, setTimeLeft] = useState(true);
    const [stuff, setStuff] = useState({lmao:'yes'});
    const [currentWeek, setCurrentWeek] = useState('')
    const [selectedWeek, setSelectedWeek] = useState('')
    const [predictionTemplate, setPredictionTemplate] = useState('')
    const [thursday, setThursday] = useState('')


    useEffect(()=>{
        //const token = await getToken()

        checkUpdate(1,token).then(m=> {
            const lastUpdated = new Date(m.result[0].updatedAt) 
            const miliseconds = lastUpdated.getTime()
            const now = Date.now()
            console.log('now: '+ now)
            console.log('last: '+ miliseconds)
            if(miliseconds + 1800000 < now){
                console.log('season needs updating')
                updateSeason(token).then(z=>{
                    getCurrentWeek(token).then(x=> {
                        setCurrentWeek(x)
                        setSelectedWeek(x.result[0].split(' ')[1])
                        if(userID){
                            makePredictionTemplate(userID, leagueID, x.result[0].split(' ')[1], token).then(template=>{
                                setPredictionTemplate(template.predictionTemplate)
                            })
                        }
                        getWeek(x.result[0].split(' ')[1], token)
                            .then(y=>{
                                setStuff(y)
                                setThursday(y.result[0].dates[0])
                            })
                    })

                })
            } else{
                console.log('no update')
                getCurrentWeek(token).then(x=> {
                    setCurrentWeek(x)
                    setSelectedWeek(x.result[0].split(' ')[1])
                    if(userID){
                        makePredictionTemplate(userID, leagueID, x.result[0].split(' ')[1], token).then(z=>{
                            setPredictionTemplate(z.predictionTemplate)
                        })
                    }
                    getWeek(x.result[0].split(' ')[1], token)
                        .then(y=>{
                            setStuff(y)
                            setThursday(y.result[0].dates[0])
                        })
                })

            }
        })

        //getWeek(currentWeek, token).then(y=>setStuff(y))
        //getWeek(token).then(x=> setStuff(x))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const updateTimeLeft = (time) => {
        setTimeLeft(time)
    }

    const changeWeek = (num) => {
        console.log('change week to:')
        console.log(num)
        makePredictionTemplate(userID, leagueID, num, token).then(z=>{
            getWeek(num, token).then(x=> {
                setStuff(x)
                setSelectedWeek(num)
                setPredictionTemplate(z.predictionTemplate)
            })
        })
    }
    const toggleAllInputs = () => {
        setShowInput(!showInput)
    }
    const getTime = () => {
        return timeLeft;
    }
    const rowPrediction = (i) => {
        if(predictionTemplate.predictions){
            return predictionTemplate.predictions[i]
        }else {
            return ''
        }
    }

    let games = []
    if(stuff.result){

        games = stuff.result[0].Games || []
        //console.log(stuff.result[0].Games[1].Home)
    }
    if(predictionTemplate&&predictionTemplate.predictions){
        return (
            <div className="overflow-x-auto w-full">
                {thursday!==''  && timeLeft && 
                    <div className='flex-row'>
                        <div className='grid grid-flox-col text-center flex-col justify-center'>
                            <span className='badge-accent badge-outline my-2 flex flex-col badge '>Tiempo restante:</span>
                        </div>
                        <Countdown thursday={thursday} updateTimeLeft={updateTimeLeft}/>
                    </div>

            }
                { !timeLeft  &&thursday!==''&&
                    <div className='flex-row'>
                        <div className='grid grid-flox-col text-center flex-col justify-center'>
                            <span className='badge-accent badge-outline my-2 flex flex-col badge '>El tiempo se ha acabado.</span>
                        </div>
                    </div>
            }
                {stuff.result &&
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" onClick={toggleAllInputs} />
                                    </label>
                                </th>
                                <th>Away</th>
                                <th></th>
                                <th>Home</th>
                                <th>More</th>
                                <th>
                                    <Select thisWeek={currentWeek.result[0]} onChange={changeWeek} num={18<Number(currentWeek.result[0].split(' ')[1]) ? Number(currentWeek.result[0].split(' ')[1]) : 18}/>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((g,i) => {
                                return (
                                    <Entry getTime={getTime} token={token} key={i+1} week={selectedWeek} userID={userID} leagueID={leagueID} game={g} prediction={rowPrediction(i)} showInput={showInput}/>
                                ) 
                            })}
                        </tbody>
                        <tfoot className='mt-auto'>
                            <tr>
                                <th></th>
                                <th>Away</th>
                                <th></th>
                                <th>Home</th>
                                <th>More</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
            }
                {!stuff.result &&

                    <RadialProgress />
            }
            </div>
        )

    } else return <RadialProgress/>
}

export default TableWithVisuals
