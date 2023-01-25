export async function getWeek(w, token) {
    try{
        const res = await fetch('http://localhost:6969/api/season/week/'+w,
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
        const res = await fetch('http://localhost:6969/api/season/week/'+w,
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

export async function getLeagueUsers(leagueID, token) {
    try{
        const res = await fetch(`http://localhost:6969/user/getLeagueUsers`,
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
        const res = await fetch(`http://localhost:6969/user/getUserInfo`,
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

export async function createLeague(email, token){
    try {
        const res = await fetch(`http://localhost:6969/league/createLeague`,
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
        const res = await fetch(`http://localhost:6969/user/registerUserInLeague`,
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
        const res = await fetch('http://localhost:6969/api/season',
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
        const res = await fetch('http://localhost:6969/api/currentWeek',
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
        const res = await fetch(`http://localhost:6969/user/checkAndRegister`,
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
        const res = await fetch(`http://localhost:6969/user/getLeagueData`,
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
