import React, { useState } from 'react'

const Select = ({thisWeek, onChange, num}) => {
    let opts = []
    let thisWeekNum = thisWeek.split(' ')[1];
    const [selectedWeek, setSelectedWeek] = useState('')
    for(let i=1; i<=num; i++){
        opts.push(i)
    }
    function handleChange(e){
        setSelectedWeek(e.target.value)
        onChange(e.target.value)
        //changeweek(e.target.value)
    }
        console.log(selectedWeek)
    return (
        <select className="select w-full max-w-xs" onChange={e=>handleChange(e)} >
            {opts.map(x=>{
                if(x===Number(thisWeekNum)){
                return <option value={x} key={x} selected>Week {x}</option>
                }
                return <option value={x} key={x}>Week {x}</option>
            })}
        </select>
    )
}

export default Select
