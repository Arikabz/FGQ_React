const server = 'https://fgq.up.railway.app'
export async function getWeek(w, token) {
    try{
        const res = await fetch(server+'/api/season/week/'+w,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function checkUpdate(w, token) {
    try{
        const res = await fetch(server+'/api/season/week/'+w,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function editExtraPoints(userID, points, reason, token) {
    try{
        const res = await fetch(`${server}/user/editExtraPoints`,
            {
                headers: {
                    'Content-Type': 'Application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    userID: userID,
                    points: points,
                    reason: reason,
                })
            }
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function getLeagueUsers(leagueID, token) {
    try{
        const res = await fetch(`${server}/user/getLeagueUsers`,
            {
                headers: {
                    'Content-Type': 'Application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    leagueID: leagueID,
                })
            }
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function updatePoints(leagueID, token) {
    try{
        const res = await fetch(`${server}/league/updatePoints`,
            {
                headers: {
                    'Content-Type': 'Application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    leagueID: leagueID,
                })
            }
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
export async function getUserInfo(email, token) {
    try{
        const res = await fetch(`${server}/user/getUserInfo`,
            {
                headers: {
                    'Content-Type': 'Application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                })
            }
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function uploadSinglePrediction(userID, leagueID, week, gameNum, awayGuess, homeGuess, token){
    try {
        const res = await fetch(`${server}/predictions/uploadSinglePrediction`,
            {
                headers: {
                    'Content-Type': 'Application/Json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    userID: userID,
                    weeknum: week,
                    leagueID: leagueID,
                    gameNum: gameNum,
                    awayGuess: awayGuess,
                    homeGuess: homeGuess,
                })
            }
        )
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export async function makePredictionTemplate(userID, leagueID, week, token){
    try {
        const res = await fetch(`${server}/predictions/makePredictionTemplate`,
            {
                headers: {
                    'Content-Type': 'Application/Json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    userID: userID,
                    weeknum: week,
                    leagueID: leagueID,
                })
            }
        )
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export async function createLeague(email, token){
    try {
        const res = await fetch(`${server}/league/createLeague`,
            {
                headers: {
                    'Content-Type': 'Application/Json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                })
            }
        )
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export async function registerUserInLeague(email, leagueID, token) {
    try{
        const res = await fetch(`${server}/user/registerUserInLeague`,
            {
                headers: {
                    'Content-Type': 'Application/Json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    leagueID: leagueID,
                })
            }
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function updateSeason(token) {
    try{
        const res = await fetch(server+'/api/season',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
export async function getCurrentWeek(token) {
    try{
        const res = await fetch(server+'/api/currentWeek',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function checkUserAndRegister (email, userName, token) {
    try{
        const res = await fetch(`${server}/user/checkAndRegister`,
            {
                headers: {
                    'Content-Type': 'Application/Json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    userName: userName,
                })
            },
        )
        return res.json();
    } catch (error){
        console.log(error)
    }
}

export async function getLeagueData (leagueID, token) {
    try{
        const res = await fetch(`${server}/user/getLeagueData`,
            {
                headers: {
                    'Content-Type': 'Application/Json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
                body: JSON.stringify({
                    leagueID: leagueID,
                })
            },
        )
        return res.json();
    } catch (error){
        console.log(error)
    }
}
